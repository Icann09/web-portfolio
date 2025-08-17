// components/Footer.tsx
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 max-w-7xl justify-center flex flex-col mx-auto">
      {/* Logo + Email */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">
          Kaisan<span className="text-pink-500">.</span>
        </h1>
        <div className="flex items-center space-x-2 mt-2 text-gray-600">
          <Mail className="w-6 h-6" />
          <span>kaisanfarasdag09@gmail.com</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Footer Links */}
      <div className="flex flex-col mb-6 md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© 2025 Muhammad Kaisan. All rights reserved.</p>
        <ul className="flex space-x-6 mt-3 md:mt-0">
          <li>
            <a href="#" className="hover:underline">
              Terms of Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Connect with me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
