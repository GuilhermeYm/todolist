import { X } from "lucide-react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface TaskFormData {
  title: string;
  content: string;
  status: "Active" | "Completed";
}

interface FormTaskProps {
  handleSubmit: UseFormHandleSubmit<TaskFormData>;
  register: UseFormRegister<TaskFormData>;
  errors: FieldErrors<TaskFormData>;
  handleCreateTask: (data: TaskFormData) => void;
  isCreatingTask: boolean;
  setIsCreatingTask: (isCreating: boolean) => void;
}

export default function FormTask({
  handleSubmit,
  register,
  errors,
  handleCreateTask,
  isCreatingTask,
  setIsCreatingTask,
}: FormTaskProps) {
  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="max-w-xl w-full bg-taskInput text-background p-6 rounded-lg shadow-lg space-y-6"
    >
      <div className="w-full flex items-center justify-between border-b border-b-backgroundHeader/10 pb-4">
        <h2 className="font-bold text-start text-xl">New Task</h2>
        <button
          className="1/3 flex items-center justify-end text-red-500 hover:text-red-700 cursor-pointer"
          type="button"
          onClick={() => setIsCreatingTask(!isCreatingTask)}
        >
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <label className="text-lg text-background/80">Title:</label>
        <input
          {...register("title")}
          className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 bg-foreground text-background/80 placeholder-background/80
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              hover:border-blue-300
              ${
                errors.title
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }
            `}
          placeholder="Tip the title of the task..."
        />{" "}
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <label className="text-lg text-background/80">Content:</label>
        <textarea
          {...register("content")}
          className={`
            w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 
            bg-foreground text-background/80 placeholder-background/80
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 resize-none min-h-[120px] max-h-[300px]
      ${
        errors.content
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 dark:border-gray-600"
      }
    `}
          placeholder="Describe the details of the tasks..."
          rows={4}
        />
        {errors.content && (
          <span className="text-red-500 text-sm">{errors.content.message}</span>
        )}
      </div>
      <div>
        <label className="text-lg text-background/80">Status:</label>
        <select
          {...register("status")}
          className={`
            w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 bg-foreground text-background/80
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300
            ${
              errors.status
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600"
            }
          `}
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
        {errors.status && (
          <span className="text-red-500 text-sm">{errors.status.message}</span>
        )}
      </div>
      <div className="flex items-center justify-end gap-4 w-full text-sm">
        <button className="bg-blue-500 border border-blue-50 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer" type="submit">
            Create
        </button>
        <button className="text-white border border-background px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-200 cursor-pointer" type="button" onClick={() => setIsCreatingTask(!isCreatingTask)}>
            Cancel
        </button>
      </div>
    </form>
  );
}
