"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { navItems } from "@/constants";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { ThemeTogle } from "./ThemeTogle";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");





  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handler = () => {
      if (media.matches) setOpen(false);
    };

    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

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
        threshold: 0.5, // ✅ 50% section visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="mobile-header">
      <div className="text-2xl font-bold text-black dark:text-[#948979]">
        Kaisan<span className="text-pink-800">.</span>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="dark:text-white">
          <Image src="/assets/icons/menu.svg" alt="menu" width={30} height={30}/>
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3 md:hidden">
          <SheetTitle>
            <div className="flex items-center py-2">
              <ThemeTogle />
            </div>
            <Separator className="mb-4 bg-black"/>
          </SheetTitle>
          <nav className="">
            <ul className="flex flex-col gap-4">
              {navItems.map(({ name, id }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className={cn(
                      "mobile-nav-item",
                      activeId === id && "shad-active"
                    )}
                    onClick={() =>  {
                      setOpen(false);
                      setActiveId(id)
                      }
                    }
                  >
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Separator className="my-5 bg-black"/>
          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/muhammad-kaisan-35a103211"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-2 bg-black text-white dark:bg-white dark:text-black"
            >
              Connect ↗
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
