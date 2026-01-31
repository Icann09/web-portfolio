import type { Metadata } from "next";
import { Poppins,  } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "next-themes";

const poppins = Poppins ({
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web-portfolio-five-inky.vercel.app"),
  title: "Muhammad Kaisan Farasdag | Front-End Developer Portfolio",
  description:
    "Portfolio of Muhammad Kaisan Farasdag, a front-end developer specializing in React, Next.js, and TypeScript. Explore projects, case studies, and contact details.",
  keywords: [
    "Muhammad Kaisan Farasdag",
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Web Developer",
    "Indonesia Developer",
    "Full-Stack Developer",
    "Supabase",
    "Tailwind CSS",
  ],
  authors: [{ name: "Muhammad Kaisan Farasdag" }],
  openGraph: {
    title: "Muhammad Kaisan Farasdag | Front-End Developer",
    description:
      "Explore my portfolio showcasing React, Next.js, and full-stack projects.",
    url: "https://web-portfolio-five-inky.vercel.app",
    siteName: "Kaisan Portfolio",
    images: [
      {
        url: "/web-page.png",
        width: 1200,
        height: 630,
        alt: "Kaisan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kaisan Farasdag | Front-End Developer Portfolio",
    description: "Explore my portfolio showcasing React, Next.js, and full-stack projects.",
    images: ["https://my-library.vercel.app/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
