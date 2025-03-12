import { List } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-900 min-h-[10vh] flex items-center justify-between px-10 py-2 text-zinc-50">
      <Link
        className="flex gap-2 items-center"
        href={"/"}
        title="VOltar para a tela inicial"
      >
        <List />
        <h1 className="font-bold text-2xl ">To Do List</h1>
      </Link>
      <nav className="flex gap-4 text-xl">
        <Link href={"/"} title="Voltar para a tela inicial">
          Home
        </Link>
        <Link
          href={"https:github.com/GuilhermeYm/todolist"}
          title="Ler um pouco sobre o site"
        >
          About
        </Link>
        <Link href={"/"}>Criar tarefa</Link>
      </nav>
    </header>
  );
}
