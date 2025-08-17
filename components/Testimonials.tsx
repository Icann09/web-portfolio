export default function Testimonials() {
  return (
    <section className="min-h-[calc(100vh-4rem)] mt-16 md:mt-2 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-transparent" id="testimonials">
      {/* Heading */}
      <p className="text-gray-600 text-sm mb-2 ">Connect with me</p>
      <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
        Get in touch
      </h2>
      <p className="text-gray-500 max-w-xl text-center mb-10">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      {/* Form */}
      <form className="w-full max-w-3xl space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Enter your message"
          rows={5}
          className="border border-gray-300 rounded-lg px-4 py-3 my-5 w-full focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center ">
          <button
            type="submit"
            className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-800 transition cursor-pointer"
          >
            Submit now →
          </button>
        </div>
        
      </form>
    </section>
  );
}
