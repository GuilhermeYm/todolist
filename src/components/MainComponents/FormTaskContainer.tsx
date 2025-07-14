import { v4 as uuidv4 } from "uuid";
import FormTask from "./FormTask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useUser } from "@/context/UserContext";

enum TaskStatus {
  ACTIVE = "Active",
  COMPLETED = "Completed",
}

const TaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(500, "Content must be less than 500 characters"),
  status: z.enum(Object.values(TaskStatus) as [string, ...string[]], {
    message: "Status deve ser 'Active' ou 'Completed'",
  }),
});

type TaskFormData = z.infer<typeof TaskSchema>;

export default function FormTaskContainer() {
  const { setIsCreatingTask, isCreatingTask, createTask } =
    useUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TaskSchema),
  });

  const handleCreateTask = (data: TaskFormData) => {
    console.log("Task created:", data);
    console.log("Task ID:", uuidv4());
  };

  const handleDeleteTask = (id: string) => {
    console.log("Task deleted with ID:", id);
  };
  return (
    <div className="max-h-screen h-full max-w-screen w-full fixed top-0 left-0 bg-background/80 p-4 flex items-center justify-center">
      <FormTask
        handleCreateTask={handleCreateTask}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        handleDeleteTask={handleDeleteTask}
        isCreatingTask={isCreatingTask}
        setIsCreatingTask={setIsCreatingTask}
      />
    </div>
  );
}
