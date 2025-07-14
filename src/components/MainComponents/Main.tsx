import MainMessage from "./MainMessage";
import ShowTasks from "./ShowTasks";

export default function Main() {
  return (
    <main className="max-h-[92vh] h-full w-screen py-6 px-4 space-y-2">
      <div className="flex items-center justify-center max-h-[20%] h-full w-full">
        <MainMessage />
      </div>
      <ShowTasks/>
    </main>
  );
}
