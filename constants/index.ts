interface Project {
  name: string;
  image: string;
  url: string;
  techStack: string[]; 
}

export const navItems = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About Me",
    id: "about-me",
  }, 
  {
    name: "Services",
    id: "services",
  }, 
  {
    name: "My Work",
    id: "my-work",
  },
  {
    name: "Get Connect",
    id: "getconnect",
  },
];

export const projects: Project[]  = [
  {
    name: "My-library",
    image: "/assets/images/my-library.png",
    url: "https://my-library-dun.vercel.app",
    techStack: ["React", "Next.js", "TailwindCSS", "Radix UI", "Sonner", "Nenon (Postgres)", "Drizzle ORM", "NextAuth", "bcyptjs", "Zod", "React Hook Form", "Upstash Redis", "ImageKit"],
  },
  {
    name: "Store-it",
    image: "/assets/images/store-it.png",
    url: "https://store-it-gamma-taupe.vercel.app",
    techStack: ["React", "Next.js", "TailwindCSS", "Radix UI", "Lucide Icons", "Sonner", "React Hook Form", "Zod", "Recharts", "Input-OTP", "Appwrite"], 
  },
  {
    name: "E-commerce",
    image: "/assets/images/e-commerce.webp",
    url: "https://e-commerce-two-ashen-45.vercel.app",
    techStack: ["React", "Next.js", "TailwindCSS", "PostgreSQL", "BetterAuth", "Zustand", "Zod", "Drizzle ORM", "Neon (Postgres)"],
  },
  {
    name: "LMS",
    image: "/assets/images/lms-app.png",
    url: "https://lms-saas-app-pink.vercel.app",
    techStack: ["React", "Next.js", "TailwindCSS", "Radix-UI", "Lucide", "Lottie", "Clerk", "Supabase", "Vapi AI", "Sentry", "React Hook Form", "Zod"],
  },
];



