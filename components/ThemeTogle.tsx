"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeTogle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
        className="
          relative flex h-9 w-16 items-center rounded-full cursor-pointer
          bg-zinc-200 dark:bg-zinc-800
          transition-colors duration-300
          focus:outline-none focus:ring-2 focus:ring-zinc-400
        "
      >
        {/* sliding knob */}
        <span
          className={`
            absolute left-1 top-1 h-7 w-7 rounded-full bg-white dark:bg-black
            shadow-md transition-transform duration-300
            ${isDark ? "translate-x-7" : "translate-x-0"}
          `}
        />

        {/* icons */}
        <Sun className="ml-2 h-4 w-4 text-zinc-500" />
        <Moon className="ml-auto mr-2 h-4 w-4 text-zinc-400" />
      </button>
    </div>
    
  );
}
