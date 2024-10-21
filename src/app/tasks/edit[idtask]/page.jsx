"use client";
import HeaderComponent from "@/app/components/HeaderComponent";
import { useEffect, useState } from "react";

export default function edittaskpage({ params }) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const idParams = params.idtask;

  useEffect(() => {
    setId(idParams);
    const findTasks = localStorage.getItem("notes");
    const tasks = JSON.parse(findTasks);
    const task = tasks. 
  });

  return (
    <>
      <HeaderComponent />
      <main></main>
    </>
  );
}
