import { NotebookIcon } from "lucide-react";
import ShowTaks from "./ShowTaks";
import StorageNotice from "./StorageNotice";
import Title from "./Title";

export default function Main() {
  return (
    <main className="flex flex-col min-h-[90vh] min-w-screen pt-10 gap-2 items-center">
      <div className="text-center border-b border-zinc-700 w-xl pb-1">
        <Title />
      </div>
      <ShowTaks />
      <StorageNotice />
    </main>
  );
}
