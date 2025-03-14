"use client"

import { useEffect, useState } from "react";

export default function Title() {
    const [ greetting, setGreeting] = useState("");
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Bom dia. 🌅");
    } else if (currentHour < 18) {
      setGreeting("Boa tarde. ☀️");
    } else {
      setGreeting("Boa noite. 🌙");
    }
  }, []);
  return <h2 className="font-bold text-3xl ">{greetting}</h2>;
}
