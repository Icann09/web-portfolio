import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center  px-6">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/profile-1.jpeg" // Replace with your profile image path
          alt="Profile"
          width={140}
          height={140}
          className="rounded-full mb-10 w-28 h-28 sm:w-[140px] sm:h-[140px]  lg:w-[180px] lg:h-[180px] object-cover"
        />
        <p className="text-lg text-gray-700">
          Hi! I’m <span className="font-semibold">Muhammad Kaisan</span> 👋
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 my-4">
          frontend web developer <br /> based in Makassar.
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          I’m a full-stack web developer from Makassar, Indonesia, passionate about building modern, responsive, and user-friendly applications. 
        </p>
        <div className="flex gap-4 mt-3 md:mt-1">
          <a
            href="https://www.linkedin.com/in/muhammad-kaisan-35a103211"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition inline-block"
          >
            Connect with me
          </a>
          <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2 text-black cursor-pointer">
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
