// components/Services.tsx

import { Globe, Smartphone, Brush, Image as ImageIcon } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Web design",
    desc: "Web development is the process of building, programming...",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Mobile app",
    desc: "Web development is the process of building, programming...",
    highlight: true, // to add the purple background
  },
  {
    icon: <Brush className="w-6 h-6 text-white" />,
    title: "UI/ UX design",
    desc: "Web development is the process of building, programming...",
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-white"/>,
    title: "Graphics design",
    desc: "Web development is the process of building, programming...",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 text-center min-h-[calc(100vh-4rem)] max-w-6xl mx-auto " id="services">
      <p className="text-gray-500 mb-2">What i offers</p>
      <h2 className="text-3xl font-bold mb-4">My services</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      I’m a Frontend Developer, specializing in building clean, responsive, and user-focused web interfaces. While these services are presented as portfolio examples, they reflect the type of frontend work I’m capable of delivering—from translating designs into code to creating modern, maintainable user interfaces.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl border bg-white shadow-sm hover:shadow-md hover:bg-[#FCF4FF] transition ${
              service.highlight
                ? "bg-pink-50 border-pink-100 shadow-lg"
                : "bg-white"
            }`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 mb-4 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
            <a
              href="#"
              className="text-sm text-gray-700 flex items-center justify-center gap-1 hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
