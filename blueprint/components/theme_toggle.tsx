"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="size={16} float-end"
    >
      {/* Condition swapped: Show Sun in Light Mode, Moon in Dark Mode */}
      {!mounted ? (
        <span className="inline-block w-6 h-6" />
      ) : theme === "light" ? (
        <Sun size={24} />
      ) : (
        <Moon size={24} />
      )}
    </button>
  );
}
