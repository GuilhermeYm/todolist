"use client";
import { useEffect, useState } from "react";
import useLocal from "../hook/useLocal";
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck, FaDeleteLeft } from "react-icons/fa6";

export default function MainComponent() {
  const [lists, setLists] = useState([]);
  const [withoutList, setWhithOutList] = useState(null);
  const { showNotes } = useLocal();

  useEffect(() => {
    const notes = showNotes();
    if (notes.length === 0) {
      setWhithOutList(true);
    } else {
      console.log(notes);
      setLists(notes);
      setWhithOutList(false);
    }
  }, []);

  return (
    <>
      <main className="flex flex-col gap-3 items-center w-screen h-[845px] ">
        <div className="w-[700px] border-b border-gray-600">
          <h1 className="text-3xl uppercase text-center mb-2">
            List de Tarefas
          </h1>
        </div>
        {withoutList ? (
          <p>Você ainda não criou nenhuma tarefa!</p>
        ) : (
          lists.map((task, index) => (
            <div
              className="flex max-w-2xl min-w-[672px] bg-gray-700 items-center max-h-[48px] gap-2 shadow-md p-10 rounded-2xl justify-between" 
              key={index}
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-xl ml-">{task.title}</h2>
                <p>{task.description}</p>
              </div>
              <div className="flex h-[30px] pl-2 border-l border-white gap-1">
                <button title="Editar">
                  <FaEdit className="text-xl hover:text-red-600 transition-colors duration-200" />
                </button>
                <button className="Deletar">
                  <FaDeleteLeft className="text-xl hover:text-red-600 transition-colors duration-200" />
                </button>
                <button className="Concluir">
                  <FaCircleCheck className="text-xl hover:text-red-600 transition-colors duration-200" />
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
}
