"use client";

import { useUser } from "@/context/UserContext";
import FormTaskContainer from "./FormTaskContainer";
import Task from "./Task";

export default function ShowTasks() {
  const { setIsCreatingTask, isCreatingTask, tasks } = useUser();

  return (
    <article className="w-full">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            content={task.content}
            key={task.id}
            status={task.status}
            title={task.title}
          />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-full text-foreground/50 gap-1">
          <p>You don&apos;t have any task, but you can</p>
          <button
            className="cursor-pointer text-foreground/50 hover:text-blue-500 transition-all duration-300 ease-in"
            onClick={() => setIsCreatingTask(true)}
          >
            create one now!
          </button>
        </div>
      )}
      {isCreatingTask && <FormTaskContainer />}
    </article>
  );
}
