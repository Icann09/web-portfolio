
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";



export default function MyLatestWork() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex-col flex justify-center" id="my-work">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-500 mb-2">My Portfolio</p>
        <h2 className="text-4xl font-bold text-gray-900 my-3 dark:text-[#948979]">My latest work</h2>
        <p className="text-gray-600 my-7">
          Welcome to my web development portfolio! Here, you’ll find a collection of projects that highlight my skills in front-end development and seamless backend integration.
        </p>
      </div>
      <div className="flex justify-center gap-6 max-w-6xl mx-auto flex-col md:flex-row">
        {projects.map((project, idx) => (
          <div key={idx} className="rounded-lg flex-1/4 overflow-hidden shadow-sm px-3 transition-transform hover:scale-110 hover:border-2">
            <div className="relative group">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={224}
                className="w-full h-56 object-cover"
                
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-md flex justify-between items-center px-4 py-3 shadow-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">{project.name}</h4>
                  <div className="text-sm text-black">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="hover:font-bold underline underline-offset-4"
                    >
                      Live Demo
                    </Link>
                    {" · "}
                    <Link
                      href={project.sourceCode}
                      target="_blank"
                      className="hover:font-bold underline underline-offset-4"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col">
              <div className="rounded-sm border-2 m-2 p-2">
                <h3 className="font-semibold mb-2">Key Feature</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.features}
                </p>
              </div>
              <div className="rounded-sm border-2 m-2 p-2">
                <h3 className="font-semibold mb-2">Tech Stack</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.techStack}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
      <div className="">
      </div>
      </div>
      <div className="text-center  mt-6 md:mt-16  mb-1 md:mb-10 lg:mb-12 ">
        <button className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 transition cursor-pointer bg-white">
          Show more →
        </button>
      </div>
    </section>
  );
}
