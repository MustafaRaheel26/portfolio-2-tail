import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="text-center py-20 bg-gray-900 text-white">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-300 mb-6">Feel free to reach out for collaborations, job opportunities, or just to connect!</p>

      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-400">Let&apos;s Connect!</h2>
          <p className="text-lg text-gray-400 mt-2">I&apos;m a passionate MERN Stack Developer based in Karachi. Always open to new challenges and exciting opportunities!</p>
        </div>

        <div className="flex justify-center space-x-8 mt-6">
          {/* GitHub Link */}
          <a href="https://github.com/MustafaRaheel26" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaGithub className="text-3xl" />
            <span className="ml-2 text-lg">GitHub</span>
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/mustafa-raheel-7b45b8286/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaLinkedin className="text-3xl" />
            <span className="ml-2 text-lg">LinkedIn</span>
          </a>

          {/* Email Link */}
          <a href="mailto:mustafaraheel26@gmail.com" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaEnvelope className="text-3xl" />
            <span className="ml-2 text-lg">Email</span>
          </a>
        </div>
      </div>

      {/* Contact Form (Optional) */}
      <div className="max-w-xl mx-auto mt-12 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Send Me a Message</h3>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none"
            rows={4}
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
