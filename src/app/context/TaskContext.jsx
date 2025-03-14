"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TasksContext = createContext({});

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  // Pegar as tarefas do localStorage
  const loadTasks = () => {
    try {
      const taskData = localStorage.getItem("tasks");
      if (taskData === "undefined" || taskData === null || !taskData) {
        localStorage.setItem(
          "tasks",
          JSON.stringify({
            tasks: [],
          })
        );
        return setTasks([]);
      }
      const dataParsed = JSON.parse(taskData);
      console.log(dataParsed);
      setTasks(dataParsed.tasks);
    } catch (err) {
      console.log(err);
      setTasks([]);
      return "Erro ao carregar as tarefas", +err.message;
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const saveTask = (data) => {
    if (!data) {
      return "Por favor, retorne os dados da tarefa";
    }

    const formData = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      status: data.status,
      createAt: new Date().toISOString(),
    };

    try {
      const taskData = localStorage.getItem("tasks");
      const parsedData = JSON.parse(taskData);
      const verifyTask = parsedData.tasks.find(
        (task) => task.title === data.title
      );
      if (verifyTask) {
        return "A tarefa já existe";
      }
      const newObject = {
        ...parsedData,
        tasks: [...parsedData.tasks, formData],
      };
      localStorage.setItem("tasks", JSON.stringify(newObject));
      setTasks(newObject.tasks);
      return true;
    } catch (err) {
      console.log(err);
      return "Erro ao salvar a tarefa", +err.message;
    }
  };

  const getTasks = () => {
    // Fazendo a lógica
    return;
  };

  const value = {
    tasks,
    setTasks,
    saveTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
