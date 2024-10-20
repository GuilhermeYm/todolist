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
    if (showNotes.length === 0) {
      setWhithOutList(false);
    }
  }, []);

  return (
    <>
      <main className="flex flex-col gap-3 items-center w-screen ">
        <div className="w-[700px] border-b border-gray-600">
          <h1 className="text-3xl uppercase text-center mb-2">
            List de Tarefas
          </h1>
        </div>
        {withoutList ? (
          <p>Você ainda não criou nenhuma tarefa!</p>
        ) : (
          <>
            <div className="flex max-w-2xl items-center max-h-[48px] gap-2">
              <div className="flex flex-col gap-1">
                <h2>Tarefa 1</h2>
                <p>
                  daskjgajgljalgkajglçkajlksajklajwlhgajhgakjghwkjhgakjhgkajhgskjhgakjh
                </p>
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
          </>
        )}
      </main>
    </>
  );
}
