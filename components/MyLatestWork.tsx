
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";



export default function MyLatestWork() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex-col flex justify-center" id="my-work">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-lg font-medium text-gray-500 ">My portfolio</h3>
        <h2 className="text-4xl font-bold text-gray-900 my-3">My latest work</h2>
        <p className="text-gray-600 my-7">
          Welcome to my web development portfolio! Explore a collection of projects showcasing
          my expertise in front-end development.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-sm px-3">
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
                  <p className="text-sm text-gray-500">{project.url}</p>
                </div>
                <div
                  className={`p-2 rounded-full border border-gray-200 group-hover:rotate-45 transition-transform`}
                >
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="w-5 h-5 text-black cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center  mt-6 md:mt-16  mb-1 md:mb-10 lg:mb-12 ">
        <button className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 transition cursor-pointer">
          Show more →
        </button>
      </div>
    </section>
  );
}
