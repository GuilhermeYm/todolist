import { NotebookIcon } from "lucide-react";
import ShowTaks from "./ShowTaks";
import StorageNotice from "./StorageNotice";

export default function Main() {
  return (
    <main className="flex flex-col min-h-[90vh] min-w-screen pt-10 gap-2 items-center">
      <div className="text-center border-b border-zinc-700 w-xl pb-1">
        <h2 className="font-bold text-3xl ">Boa tarde. ☀️</h2>
      </div>
      <ShowTaks />
      <StorageNotice />
    </main>
  );
}
