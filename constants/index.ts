interface Project {
  name: string;
  image: string;
  url: string;
  sourceCode: string;
  techStack: string; 
  features: string;
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
    sourceCode: "https://github.com/Icann09/my-library",
    features: "A role-based digital library system with secure Supabase RLS, server-side rendering for performance and SEO, and automated background email reminders using serverless workflows.",
    techStack: "Next.js, React, Tailwind CSS, Drizzle ORM, Neon Postgres, NextAuth, Upstash, ImageKit"
  },
  {
    name: "Store-it",
    image: "/assets/images/store-it.png",
    url: "https://store-it-gamma-taupe.vercel.app",
    sourceCode: "https://github.com/Icann09/store_it",
    features:"A secure web application for users to sign in and manage their files online, featuring authenticated access, file upload and organization tools, and a responsive, modern user interface built with Next.js, React, Tailwind CSS, and Appwrite",
    techStack: "Next.js, React, Tailwind CSS, Radix UI, Appwrite, Zod, Recharts"
  },
  {
    name: "E-commerce",
    image: "/assets/images/e-commerce.webp",
    url: "https://e-commerce-two-ashen-45.vercel.app",
    sourceCode: "https://github.com/Icann09/e-commerce",
    features: "A modern eCommerce app built with Next.js and React, featuring authentication, dynamic product variants, a persistent cart, and wishlist functionality. Designed mobile-first with optimized images and a scalable full-stack architecture using server actions and Drizzle ORM.",
    techStack: "Next.js, React, Tailwind CSS, PostgreSQL, Drizzle ORM, Zustand"
  },
  {
    name: "LMS",
    image: "/assets/images/lms-app.png",
    url: "https://lms-saas-app-pink.vercel.app",
    features: "A full-stack Next.js learning platform designed for course delivery and user interaction. Highlights include user authentication, dynamic course pages, intuitive navigation, and responsive layouts, demonstrating proficiency in React, Tailwind CSS, and server-side logic",
    sourceCode: "https://github.com/Icann09/lms-saas-app",
    techStack: "Next.js, React, Tailwind CSS, Supabase, Clerk, Radix UI"
  },
];



