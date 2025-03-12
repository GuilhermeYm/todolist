"use client";

import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";
import Link from "next/link";
import ModalCreateTask from "./ModalCreateTask";

export default function ShowTaks() {
  const { tasks, setTasks } = useTasks();
  const [filter, setFilter] = useState("all");
  const [withoutTaks, setWithoutTasks] = useState(true);

  useEffect(() => {
    if (tasks.length !== 0) {
      setWithoutTasks(false);
    }
  }, []);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-zinc-100 py-10 px-20 min-w-[50%] rounded-2xl">
      <h1 className="text-2xl font-bold text-zinc-800">Minhas Tarefas</h1>

      <div className="flex space-x-4 mb-4">
        <button
          className={`px-3 py-1 rounded cursor-pointer ${
            withoutTaks && "!bg-gray-500 !text-white"
          } ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("all")}
          disabled={withoutTaks}
          title={
            withoutTaks
              ? "Você não tem tarefas, por isso botão está desabilitado"
              : "Ver todas as tarefas"
          }
          aria-label="Mostrar todas as tarefas"
        >
          Todas
        </button>
        <button
          disabled={withoutTaks}
          className={`px-3 py-1 rounded cursor-pointer ${
            withoutTaks && "!bg-gray-500 !text-white"
          } ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("active")}
          title={
            withoutTaks
              ? "Você não tem tarefas, por isso botão está desabilitado"
              : "Ver somente as tarefas ativas"
          }
          aria-label="Mostrar somente as tarefas ativas"
        >
          Ativas
        </button>
        <button
          disabled={withoutTaks}
          className={`px-3 py-1 rounded cursor-pointer ${
            withoutTaks && "!bg-gray-500 !text-white"
          } ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("completed")}
          title={
            withoutTaks
              ? "Você não tem tarefas, por isso botão está desabilitado"
              : "Ver somente as tarefas concluídas"
          }
          aria-label="Mostrar somente as tarefas concluídas"
        >
          Concluídas
        </button>
      </div>
      {tasks.length === 0 && withoutTaks ? (
        <div className="flex items-center justify-center w-full flex-col">
          <p className="text-xl text-gray-400">
            Ainda não tem nenhuma tarefa a ser feita 😥
          </p>
          <Link
            className="text-blue-500 font-semibold ml-2 text-lg"
            href={"/?showCreateTask=true"}
          >
            Adicione uma! 🚀
          </Link>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="mr-3 h-5 w-5"
              />
              <span
                className={task.completed ? "line-through text-gray-400" : ""}
              >
                {task.title}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </div>
        ))
      )}

      {tasks.length !== 0 && (
        <div className="text-sm text-gray-500">
          {tasks.filter((t) => !t.completed).length} tarefas restantes
        </div>
      )}

      <ModalCreateTask />
    </div>
  );
}
