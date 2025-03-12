import { X } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormCreateTaskSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres").max(50, "O título não pode ter mais de 50 caracteres").nonempty("O título é obrigatório"),
  description: z.string().min(3, "A descrição deve ter pelo menos 3 caracteres").max(100, "A descrição não pode ter mais de 100 caracteres").nonempty("A descrição é obrigatória"),
  priority: z.enum(["baixa", "média", "alta"], {
    errorMap: () => ({ message: "Selecione uma prioridade válida" }),
  }),
  status: z.enum(["active", "completed"], {
    errorMap: () => ({ message: "Status inválido" }),
  }).default("active"),
});

export default function FormCreateTaskChat() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    reset,
  } = useForm({
    resolver: zodResolver(FormCreateTaskSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      priority: "média",
      status: "active",
    }
  });

  const onSubmit = (data) => {
    // Lógica para salvar a tarefa
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-xl overflow-hidden animate-fade-in-up">
          {/* Cabeçalho */}
          <div className="bg-zinc-800 text-white p-5 flex justify-between items-center">
            <h2 className="font-bold text-2xl">Criar nova tarefa</h2>
            <Link
              href={"/?showCreateTask=false"}
              className="p-2 hover:bg-zinc-700 rounded-full transition-colors"
            >
              <X size={20} className="text-zinc-200" />
            </Link>
          </div>
          
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-6"
          >
            {/* Título */}
            <div className="space-y-2">
              <label htmlFor="title" className="block font-medium text-zinc-800">
                Título
              </label>
              <input
                {...register("title")}
                id="title"
                placeholder="Ex: Terminar relatório"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label htmlFor="description" className="block font-medium text-zinc-800">
                Descrição
              </label>
              <textarea
                {...register("description")}
                id="description"
                rows={3}
                placeholder="Descreva os detalhes da tarefa"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description.message}</p>
              )}
            </div>

            {/* Prioridade */}
            <div className="space-y-2">
              <label htmlFor="priority" className="block font-medium text-zinc-800">
                Prioridade
              </label>
              <div className="flex gap-4">
                {["baixa", "média", "alta"].map((priority) => (
                  <label 
                    key={priority}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input 
                      type="radio"
                      value={priority}
                      {...register("priority")} 
                      className="w-4 h-4 accent-blue-600"
                    />
                    <span className={`capitalize ${
                      priority === "baixa" ? "text-green-600" : 
                      priority === "média" ? "text-amber-600" : "text-red-600"
                    }`}>
                      {priority}
                    </span>
                  </label>
                ))}
              </div>
              {errors.priority && (
                <p className="text-red-500 text-sm">{errors.priority.message}</p>
              )}
            </div>

            {/* Botões de ação */}
            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200">
              <Link
                href="/?showCreateTask=false"
                className="px-5 py-2.5 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {isSubmitting ? "Criando..." : "Criar tarefa"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}