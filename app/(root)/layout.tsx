import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import React from "react";
import { Toaster } from "@/components/ui/sonner"

// export const dynamic = "force-dynamic";

export default async function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen">
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation /> 
        <Header />
        <div className="main-content">
          {children}
        </div>
      </section>
      <Toaster />
    </main>
  )
}
