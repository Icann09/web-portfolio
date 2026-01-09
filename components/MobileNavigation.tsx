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

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const section = "home";

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handler = () => {
      if (media.matches) setOpen(false);
    };

    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);
  
  return (
    <header className="mobile-header">
      <div className="text-2xl font-bold text-black">
        Kaisan<span className="text-pink-800">.</span>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image src="/assets/icons/menu.svg" alt="menu" width={30} height={30}/>
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3 md:hidden">
          <SheetTitle>
            <div className="text-2xl font-bold text-black pt-4">
              Kaisan<span className="text-pink-800">.</span>
            </div>
            <Separator className="mb-4 bg-black"/>
          </SheetTitle>
          <nav className="">
            <ul className="flex flex-col gap-4">
              {navItems.map(({ name, id }) => (
                <Link key={name} href={`#${id}`} className="lg:w-full">
                  <li className={cn("mobile-nav-item", section === id && "shad-active")}>
                    <p>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className="my-5 bg-black"/>
          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/muhammad-kaisan-35a103211"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-2 bg-black text-white"
            >
              Connect ↗
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
