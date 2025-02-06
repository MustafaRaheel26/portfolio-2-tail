import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section className="bg-light-gray py-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 mt-4">MERN Stack Developer from Karachi</p>
      </div>

      {/* Developer Info */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex justify-center items-center mb-6">
          {/* Profile Image */}
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D35AQEtJ8JQDOL-PQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710845738745?e=1739469600&v=beta&t=0LFbvMc0mDTXLiHzGY4fupxHT-PqwmbWnme0eVoMtTc" // Replace with your image URL
            alt="Muneeb"
            width={120}
            height={120}
            className="rounded-full border-4 border-blue-600"
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Hello! I&apos;m Mustafa, a passionate MERN Stack Developer based in Karachi. I specialize in
          building scalable web applications using MongoDB, Express.js, React, and Node.js. Let&apos;s
          work together to create amazing digital experiences.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/MustafaRaheel26" // Link to your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-blue-600 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-raheel-7b45b8286/" // Link to your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Skills Section with Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-bold text-blue-600">Frontend Development</h3>
          <p className="text-gray-700 mt-2">
            Creating responsive and interactive UIs using React.js and Next.js. Focused on performance and user experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-bold text-blue-600">Backend Development</h3>
          <p className="text-gray-700 mt-2">
            Building server-side applications and APIs with Node.js and Express.js. Integrating databases like MongoDB.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-bold text-blue-600">Database Management</h3>
          <p className="text-gray-700 mt-2">
            Expertise in NoSQL databases like MongoDB, focusing on efficient data storage and retrieval for scalable applications.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-700 mb-4">Interested in working together? Let&apos;s connect!</p>
        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
