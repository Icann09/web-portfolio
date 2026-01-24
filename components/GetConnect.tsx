"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import config from "@/lib/config";

export default function GetConnect() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;

    try {
      const SERVICE_ID = config.env.emailJs.serviceId!;
      const TEMPLATE_ID = config.env.emailJs.templateId!;
      const PUBLIC_KEY = config.env.emailJs.publicKey!;

      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      console.log(result.text);
      setStatus("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-[calc(100vh-4rem)] mt-16 md:mt-2 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-transparent"
      id="getconnect"
    >
      {/* Heading */}
      <p className="text-gray-600 text-sm mb-2">Connect with me</p>
      <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 dark:text-[#948979]">
        Get in touch
      </h2>
      <p className="text-gray-500 max-w-xl text-center mb-10">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Enter your message"
          rows={5}
          required
          className="border border-gray-300 rounded-lg px-4 py-3 my-5 w-full focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-800 transition cursor-pointer disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit now →"}
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <p className="text-center text-sm mt-3 text-gray-700">{status}</p>
        )}
      </form>
    </section>
  );
}
