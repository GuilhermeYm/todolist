"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface task {
  id: string;
  title: string;
  content: string;
  status: "Active" | "Completed";
}

interface UserContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  tasks: task[];
  createTask: (data: task) => boolean;
  isCreatingTask: boolean;
  setIsCreatingTask: (isCreating: boolean) => void;
  deleteTask: (id: string) => boolean;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [tasks, setTasks] = useState<task[]>([]);
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (!savedTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    switch (theme) {
      case "light":
        setTheme("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      case "dark":
        setTheme("dark");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const createTask = (data: task) => {
    try {
      console.log("Creating task:", data);
    } catch (err) {
      console.error("Error creating task:", err);
      return false;
    }
  };

  const deleteTask = (id: string) => {
    try {
      console.log("Deleting task with ID:", id);
      return true;
    } catch (err) {
      console.error("Error deleting task:", err);
      return false;
    }
  };

  const values = {
    theme,
    toggleTheme,
    tasks,
    createTask,
    isCreatingTask,
    setIsCreatingTask,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined && !context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
