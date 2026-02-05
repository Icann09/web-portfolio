"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/constants";
import { Linkedin, GithubIcon } from "lucide-react";
import { ThemeTogle } from "./ThemeTogle";


export default function Header() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Adjusts when the section is considered "active"
        rootMargin: "-40% 0px -40% 0px", // middle 20% of viewport
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="hidden md:flex items-center justify-between gap-5 h-16 xl:gap-10">
      <nav className="top-6 flex items-center justify-between w-full max-w-6xl mx-auto px-5">
        <div className="text-2xl font-bold text-black dark:text-[#948979]">
          Kaisan<span className="text-pink-800">.</span>
        </div>
        <ul className="flex items-center space-x-1 lg:space-x-6 text-sm lg:text-lg text-gray-700  px-2 md:px-6 py-2">
          {navItems.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? "true" : undefined}
                 className={`
                    relative px-3 py-1
                    transition-colors duration-300
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-full after:bg-black dark:after:bg-white
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    ${
                      activeId === link.id
                        ? "after:scale-x-100 text-black dark:text-white font-semibold"
                        : "after:scale-x-0 text-gray-500  hover:text-black dark:hover:text-white"
                    }
                  `}
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/muhammad-kaisan-35a103211"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border border-black p-2 hover:scale-120 transition-transform"
          >
            <Linkedin />

          </a>
          <a
            href="https://www.github.com/Icann09"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border border-black p-2 hover:scale-120 transition-transform"
          >
            <GithubIcon />
          </a>
          <ThemeTogle />
        </div>
      
      </nav>
    </header>
  );
}
