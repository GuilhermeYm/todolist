"use client";

import { useUser } from "@/context/UserContext";

export default function CreateTaskButton() {
  const { isCreatingTask, setIsCreatingTask } = useUser();

  return (
    <button
      className="text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
      onClick={() => { 
         setIsCreatingTask(!isCreatingTask) 
         console.log("Create Task Button Clicked")
      }}
    >
      Create Task
    </button>
  );
}
