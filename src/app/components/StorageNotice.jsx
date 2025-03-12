"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StorageNotice() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const localStorageNotice = localStorage.getItem("localStorageNotice");
    console.log(localStorageNotice);
    if (localStorageNotice === null || localStorageNotice !== "true") {
      setVisible(false);
      localStorage.setItem("localStorageNotice", "true");
    } else {
      setVisible(true);
    }
  }, []);

  const closeNotice = () => {
    setVisible(true);
  };

  if (visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
      <div className="fixed inset-0 top-1/2 left-1/2 z-50 bg-[#1A1A1A]/50 text-center min-h-screen min-w-screen transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="bg-zinc-900 py-10 px-10 rounded-xl text-white shadow-2xl min-w-xs animate-fade-in-up">
          {/*Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-700">
            <h2 className="font-bold text-5xl">⚠️ Atenção!</h2>
            <button
              onClick={closeNotice}
              type="button"
              className="cursor-pointer text-white hover:text-red-600"
              aria-label="Fechar aviso"
            >
              <X size={24} />
            </button>
          </div>
          {/*Conteúdo */}
          <div className="space-y-2 mt-4">
            <p className="text-lg text-start">
              Este site não possui um banco de dados, então...
            </p>
            <p className="text-lg text-start">
              Todas as tarefas criadas por você serão salvas no{" "}
              <span className="font-semibold text-green-400">
                localStorage do seu navegador
              </span>
            </p>
            <div className="bg-red-900/30 border border-red-800 p-3 rounded-lg">
              <p className="text-red-300 font-medium">
                ⚠️ Limpar o cache do navegador pode apagar todas as tarefas!
              </p>
            </div>
            <p className="text-zinc-300 text-start">
              Você pode saber mais sobre o localStorage
              <Link
                className="text-blue-400 hover:text-blue-300 underline transition-colors pl-1"
                href="https://github.com/GuilhermeYm/todolist"
                target="_blank"
                rel="noopener noreferrer"
              >
                clicando aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
