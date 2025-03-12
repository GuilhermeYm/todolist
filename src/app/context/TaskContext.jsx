"use client";

import { createContext, useState, useContext, useEffect } from "react";

const TasksContext = createContext({});

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  // Pegar as tarefas do localStorage
  useEffect(() => {
    const task = localStorage.getItem("tasks");
    console.log(task);
    if (task === "undefined" || task === null || !task) {
      console.log('Não tem tarefas no localStorage');
      localStorage.setItem(
        "tasks",
        JSON.stringify({
          tasks: [],
        })
      );
      return setTasks([]);
    } else {
      console.log('Tem tarefas no localStorage')
      const dataParsed = JSON.parse(task);
      setTasks(dataParsed.tasks);
    }
  }, []);

  const saveTaks = (data) => {};

  const value = {
    tasks,
    setTasks,
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
