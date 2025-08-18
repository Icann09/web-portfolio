import Image from "next/image"
import { Code, GraduationCap, Briefcase } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto py-16 px-6" id="about-me">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm">Introduction</p>
        <h2 className="text-4xl font-serif text-gray-900">About me</h2>
      </div>

      <div className="flex flex-col justify-between md:flex-row gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-72 rounded-lg overflow-hidden md:w-80 md:h-96">
            <Image
              src="/assets/images/profile.jpeg" // Replace with your photo
              alt="Profile picture"
              fill
              className="object-cover"
              
            />
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <p className="text-gray-700 mb-8 leading-relaxed">
          I’m a passionate Full-stack Developer, building my skills through real-world projects and continuous learning. I’ve completed tutorials from JavaScript Mastery and developed my personal portfolio website, and I’m now eager to contribute my skills to a professional team for my first industry experience.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-7 mb-8">
            {/* Languages */}
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-200 hover:border-gray-500">
              <Code className="w-6 h-6 text-gray-800 mb-2" />
              <h3 className="font-semibold text-gray-900">Languages</h3>
              <p className="text-sm text-gray-600">
                HTML, CSS, JavaScript, React Js, Next Js
              </p>
            </div>

            {/* Education */}
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-200 hover:border-gray-500">
              <GraduationCap className="w-6 h-6 text-gray-800 mb-2" />
              <h3 className="font-semibold text-gray-900">Education</h3>
              <p className="text-sm text-gray-600">
                Bachelor Degree in Mechanical Engineering
              </p>
            </div>

            {/* Projects */}
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-200 hover:border-gray-500">
              <Briefcase className="w-6 h-6 text-gray-800 mb-2" />
              <h3 className="font-semibold text-gray-900">Projects</h3>
              <p className="text-sm text-gray-600">
                Built more than 5 projects
              </p>
            </div>
          </div>

          {/* Tools */}
          <p className="text-gray-700 mb-3">Tools I use</p>
          <div className="flex gap-3 flex-wrap">
            {[
              "/assets/icons/vscode.png",
              "/assets/icons/firebase.png",
              "/assets/icons/mongodb.png",
              "/assets/icons/figma.png",
              "/assets/icons/git.png",
            ].map((icon, index) => (
              <div
                key={index}
                className="p-2 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <Image src={icon} alt="Tool" width={32} height={32} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
