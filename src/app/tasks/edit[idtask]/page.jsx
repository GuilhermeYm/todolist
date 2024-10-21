import { useEffect, useState } from "react";
import HeaderComponent from "@/app/components/HeaderComponent";

export default function EditTaskPage({ params }) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  // Extrai o número do parâmetro idtask
  const idParams = params.idtask.match(/\d+/)[0];

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

  return (
    <>
      <HeaderComponent />
      <main>
        <h1>Editar Tarefa</h1>
        <form>
          <div>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">Conteúdo</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </main>
    </>
  );
}