"use client";

import { useEffect, useState } from "react";

export default function MainMessage() {
  const [message, setMessage] = useState<
    "Good Morning" | "Good Afternoon" | "Good Evening"
  >("Good Morning");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 12 && currentHour < 18) {
      setMessage("Good Afternoon");
    } else if (currentHour >= 18 || currentHour < 6) {
      setMessage("Good Evening");
    } else {
      setMessage("Good Morning");
    }
  }, []);

  return <h2 className="text-2xl text-center font-semibold">{message}</h2>;
}
