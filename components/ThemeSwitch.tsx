"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");
  const changeTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      if (localTheme === "dark") document.documentElement.classList.add("dark");
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 h-[3rem] 
            w-[3rem] rounded-full flex justify-center 
            items-center backdrop-blur-[0.5rem] 
            border shadow-2xl border-white/40
            bg-white dark:bg-gray-950 bg-opacity-80
            hover:scale-105 active:scale-90 transition-all"
      onClick={changeTheme}
    >
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
