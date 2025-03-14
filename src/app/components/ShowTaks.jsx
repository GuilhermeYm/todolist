"use client";

import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";
import Link from "next/link";
import ModalCreateTask from "./ModalCreateTask";
import { Pause, Play, Check, Trash } from "lucide-react";

export default function ShowTaks() {
  const { tasks, setTasks, toggleStatusTask } = useTasks();
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [withoutTaks, setWithoutTasks] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const applyFilter = (filterType) => {
    switch (filterType) {
      case "active":
        setFilteredTasks(tasks.filter((task) => task.status === "active"));
        break;
      case "completed":
        setFilteredTasks(tasks.filter((task) => task.status === "completed"));
        break;
      case "onhould":
        setFilteredTasks(tasks.filter((task) => task.status === "onhould"));
        break;
      default:
        console.log;
        setFilteredTasks(tasks);
        break;
    }
  };

  useEffect(() => {
    if (tasks.length !== 0) {
      setWithoutTasks(false);
    } else {
      setWithoutTasks(true);
    }
    applyFilter(filter);
  }, [tasks, filter]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleStatus = (id, newValue) => {
    try {
      setIsLoading(true);
      console.log("Carregando...");
      const request = toggleStatusTask(id, newValue);
      if (request === true) {
        alert("Mudou");
        console.log(request);
      } else {
        console.error(request);
      }
    } catch (err) {
      console.log("Erro", err);
    } finally {
      setIsLoading(false);
    }
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
        <button
          disabled={withoutTaks}
          className={`px-3 py-1 rounded cursor-pointer ${
            withoutTaks && "!bg-gray-500 !text-white"
          } ${filter === "onhould" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("onhould")}
          title={
            withoutTaks
              ? "Você não tem tarefas, por isso botão está desabilitado"
              : "Ver somente as tarefas pausadas"
          }
          aria-label="Mostrar somente as tarefas concluídas"
        >
          Pausadas
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
      ) : !isLoading ? (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between  p-4 rounded-lg shadow gap-4 min-w-xs max-w-xs ${
        task.status === "completed"
          ? "bg-green-100"
          : task.status === "onhould"
          ? "bg-yellow-100"
          : "bg-white"
      }`}
      title={task.status === "onhould" ? "Tarefa pausada" : task.status === "completed" ? "Tarefa concluída" : "Tarefa ativa"}
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-2  shrink-0">
                <button
                  className={`cursor-pointer hover:text-blue-500 transition-colors duration-300 ease-in-out ${
                    task.status === "onhould" ? "text-blue-800" : ""
                  }`}
                  onClick={() =>
                    toggleStatus(
                      task.id,
                      task.status === "active" ? "onhould" : "active"
                    )
                  }
                  title={
                    task.status === "onhould"
                      ? "Tarefa pausada. Clique para retomar"
                      : "Pausar tarefa"
                  }
                  aria-label={
                    task.status === "onhould"
                      ? "Retomar tarefa"
                      : "Pausar tarefa"
                  }
                >
                  {task.status === "onhould" ? (
                    <Play size={20} />
                  ) : (
                    <Pause size={20} />
                  )}
                </button>
                <button
                  className="cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out"
                  onClick={() =>
                    toggleStatus(
                      task.id,
                      task.status === "completed" ? "active" : "completed"
                    )
                  }
                  title={
                    task.status === "completed"
                      ? "Tarefa concluída. Clique novamente para não deixar a tarefa concluída"
                      : "Concluir tarefa"
                  }
                >
                  {task.status === "completed" ? (
                    <Check size={20} className="text-green-500" />
                  ) : (
                    <Check size={20} />
                  )}
                </button>
              </div>
              <span
                className={` ${
                  task.status === "completed" ? "text-gray-400" : ""
                } relative truncate w-32`}
              >
                {task.title}
                {task.status === "completed" && (
                  <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-400 transform animate-strike"></span>
                )}
              </span>
            </div>
            <div className="flex shrink-0">
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 gap-2 flex items-center"
              >
                <Trash size={20} />
                Excluir
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-2">Carregando...</span>
        </div>
      )}

      {/* {tasks.length !== 0 && filter !== "completed" && (
        <div className="text-sm text-gray-500">
          {tasks.filter((t) => t.status === "active").length} tarefas restantes
        </div>
      )} */}

      <ModalCreateTask />
    </div>
  );
}
