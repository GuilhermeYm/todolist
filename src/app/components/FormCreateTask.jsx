import { X } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormCreateTaskSchema = z.object({
  title: z.string().min(3).max(50).nonempty(),
  description: z.string().min(3).max(100).nonempty(),
  status: z.enum(["active", "completed"]),
});

export default function FormCreateTask() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm({
    resolver: zodResolver(FormCreateTaskSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {};

  return (
    <>
      {/*Overlay */}
      <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
      {/*Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-xl overflow-hidden animate-fade-in-up">
          {/*Header */}
          <div className="flex items-center justify-between py-3 px-4 border-b border-zinc-200 bg-zinc-200">
            <h2 className="font-bold text-3xl">Criar uma tarefa</h2>
            <Link
              href={"/?showCreateTask=false"}
              className="p-2 hover:bg-zinc-300 rounded-full transition-colors duration-300 ease-in-out"
            >
              <X size={24} className="text-zinc-950" />
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block font-medium text-2xl">
                Título
              </label>
              <input
                {...register("title")}
                placeholder="Escreva o título da sua tarefa"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="title" className="block font-medium text-2xl">
                Descrição
              </label>
              <input
                {...register("title")}
                placeholder="Escreva a descrição da sua tarefa"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200">
              <Link href={"/?showCreateTask=false"}>
                <button className="bg-transparent border border-zinc-800 py-2 px-4 rounded-lg text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer">
                  Cancelar
                </button>
              </Link>
              <button className="border bg-blue-600 border-zinc-200 py-2 px-4 rounded-lg hover:bg-blue-700 text-white hover:border-zinc-900 transition-all duration-300 ease-in-out cursor-pointer" type="submit">
                Criar tarefa
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
