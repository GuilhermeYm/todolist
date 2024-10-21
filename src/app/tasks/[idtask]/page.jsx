"use client";

import { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";

export default function taskpage({ params }) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const idParams = params.idtask;

  useEffect(() => {
    setId(idParams);
  });

  return (
    <>
      <HeaderComponent />
      <main>
        <h1>Detalhes da tarefa de id: {id} </h1>
        <div>
          <h2></h2>
        </div>
      </main>
    </>
  );
}
