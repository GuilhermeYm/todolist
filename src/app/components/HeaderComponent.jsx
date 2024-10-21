import React from "react";
import Link from "next/link";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default function HeaderComponent() {
  return (
    <>
      <header className="w-screen h-[50px] bg-gray-800 flex justify-between items-center px-3 mb-5">
        <h1 className="text-xl uppercase"><Link href="/">Todolist of Bico</Link></h1>
        <div>
          <ul className="flex gap-2">
            <Link
              className="cursor-pointer transition-colors duration-200 hover:text-blue-700"
              href="/"
            >
              Ver Anotações
            </Link>
            <Link className="cursor-pointer transition-colors duration-200 hover:text-blue-700" href="createnote">
              Criar Anotação
            </Link>
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <li className="cursor-pointer transition-colors duration-200 hover:text-blue-700">
                  Ver aviso
                </li>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                <AlertDialog.Content className="fixed bg-gray-900 p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <AlertDialog.Title className="text-lg font-bold">
                    Aviso importante
                  </AlertDialog.Title>
                  <AlertDialog.Description className="mt-2">
                    Todas as suas listas de tarefas serão armazenadas no seu
                    navegador. Se você limpar o cache, perderá todas as suas
                    listas de tarefas.
                  </AlertDialog.Description>
                  <div className="mt-4 flex justify-end">
                    <AlertDialog.Cancel asChild>
                      <button className="bg-gray-500 px-4 py-2 rounded-md mr-2 transition-colors duration-200 hover:bg-gray-600">
                        Fechar
                      </button>
                    </AlertDialog.Cancel>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </ul>
        </div>
      </header>
    </>
  );
}
