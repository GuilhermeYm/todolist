"use client";

import { useUser } from "@/context/UserContext";
import { Moon, SunMoon } from "lucide-react";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useUser();

  return (
    <button
      className="text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? <Moon /> : <SunMoon />}
    </button>
  );
}
