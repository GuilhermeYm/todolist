import Link from "next/link";
import CreateTaskButton from "./CreateTaskButton";
import ToggleTheme from "./ToggleTheme";
import { Notebook } from "lucide-react";
import Github from "./Github";

export default function Header() {
  return (
    <header className="flex items-center justify-center max-w-screen w-full max-h-[8vh] h-[8vh] bg-backgroundHeader py-5">
      <div className="flex items-center justify-between w-full max-w-2xl">
        <div className="flex items-center gap-2 basis-2/4">
          <Notebook size={26} />
          <h1 className="text-3xl tracking-widest font-bold text-foreground w-full">
            To Do List
          </h1>
        </div>
        <nav className="flex items-center justify-between w-full basis-2/4">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Link
                href={"/"}
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <CreateTaskButton />
            </li>
          </ul>
          <div className="flex items-center gap-4 justify-end">
            <ToggleTheme />
            <Github />
          </div>
        </nav>
      </div>
    </header>
  );
}
