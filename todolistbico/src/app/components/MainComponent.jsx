"use client";
import { useEffect, useState } from "react";
import useLocal from "../hook/useLocal";

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
            <div className="flex w-full items-center pl-96">
              <div>
                <h2>Tarefa 1</h2>
                <p>Descrição </p>
              </div>
              <div>{/* <!-- Área dos botões --> */}</div>
            </div>
            <div className="flex w-full items-center pl-96">
              <div>
                <h2>Tarefa 1</h2>
                <p>Descrição </p>
              </div>
              <div>{/* <!-- Área dos botões --> */}</div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
