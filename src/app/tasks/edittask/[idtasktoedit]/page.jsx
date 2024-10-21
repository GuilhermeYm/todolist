"use client";

import { useEffect, useState } from "react";
import HeaderComponent from "@/app/components/HeaderComponent";

export default function EditTaskPage({ params }) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  // Extrai o número do parâmetro idtask
  const idParams = params.idtasktoedit;

  useEffect(() => {
    setId(idParams);
    const findTasks = localStorage.getItem("notes");
    if (findTasks) {
      const tasks = JSON.parse(findTasks);
      const task = tasks.find((t) => t.id === idParams);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setContent(task.content);
      }
    }
  }, [idParams]);

  const handleSubmit = (e) => { 
    e.preventDefault() 
  
  }

  return (
    <>
      <HeaderComponent />
      <main className="h-screen w-screen flex flex-col justify-center items-center">
        <form className="h-1/2 bg-backgroundSecondary w-1/4 flex flex-col px-6 rounded-xl py-5 gap-3" onSubmit={(e) => handleSubmit}>
          <h1 className="text-3xl text-center">Editar Tarefa</h1>
          <h2>Id da tarefa: {id} </h2>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="title" className="text-xl">
              Título
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white placeholder:text-[14px]"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="flex flex-col justify-center gap-2"
            >
              Descrição
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white placeholder:text-[14px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white placeholder:text-[14px]"
            />
          </div>
          <div className="mt-2 ">
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded-md transition-colors duration-200 hover:bg-blue-700"
            >
              Criar
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
