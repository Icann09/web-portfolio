import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center  px-6">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/images/profile.jpeg" // Replace with your profile image path
          alt="Profile"
          width={140}
          height={140}
          className="rounded-full mb-10 w-32 h-32 sm:w-[140px] sm:h-[140px]  lg:w-[180px] lg:h-[180px] object-cover"
        />
        <p className="text-lg text-gray-700">
          Hi! I’m <span className="font-semibold">Muhammad Kaisan</span> 👋
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 my-4 dark:text-[#948979]">
          Frontend Developer • React & Next.js
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          I specialize in building modern, production-ready web applications with React and Next.js (App Router). My work focuses on crafting clean, accessible user interfaces and implementing robust frontend architecture using server components, server actions, and state management. Coming from an engineering background, I bring strong problem-solving skills and a self-driven mindset to every project I build.
        </p>
        <div className="flex gap-4 mt-3 md:mt-1">
          <a
            href="http://github.com/Icann09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-110 transition inline-block w-[225px]"
          >
            Connect with me
          </a>
          <button className="border border-gray-400 px-6 py-3 rounded-full hover:scale-110 transition flex items-center gap-2 text-black cursor-pointer w-[225px bg-white">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-4-4m4 4l4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
