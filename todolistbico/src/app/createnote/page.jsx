"use client";

import HeaderComponent from "@/app/components/HeaderComponent";
import { useState } from "react";

export default function createnote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <HeaderComponent />
      <main className="w-screen h-screen flex justify-center items-center">
        <form className="flex flex-col bg-backgroundSecondary h-1/2 px-3 py-3 w-1/4 rounded-2xl gap-3">
          <h1 className="text-center text-3xl mb-3">Criar anotação </h1>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="title" className="text-xl">
              Título: <span className="text-red-600 ">*</span>
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
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="description">
              Descrição: <span className="text-red-600 ">*</span>
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white placeholder:text-[14px]"
            />
            <p className="text-[10px] italic">D</p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="content">
              Conteúdo: <span className="text-red-600 ">*</span>
            </label>
            <input
              type="text"
              name="content"
              id="content"
              value={content}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white placeholder:text-[14px]"
            />
          </div>
          <div>
            <button type="submit">Criar</button>
          </div>
        </form>
      </main>
    </>
  );
}
