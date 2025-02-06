import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold text-blue-500 mb-6">About Me</h1>
        <div className="flex justify-center mb-6">
          <Image 
            src="https://media.licdn.com/dms/image/v2/D4D35AQEtJ8JQDOL-PQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710845738745?e=1739469600&v=beta&t=0LFbvMc0mDTXLiHzGY4fupxHT-PqwmbWnme0eVoMtTc" // Replace with your actual image link
            alt="Your Picture"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-400 mb-4">
          I&apos;m a passionate Mern Stack Developer from Karachi. I specialize in creating fast and scalable web applications with a focus on user experience and clean code.
        </p>
        <p className="text-md text-gray-500 mb-6">
          With experience in frontend and backend technologies, I&apos;m dedicated to building innovative solutions that solve real-world problems.
        </p>
        <div className="flex justify-center gap-8 mb-10">
          <a href="https://github.com/MustafaRaheel26" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/mustafa-raheel-7b45b8286/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaLinkedin size={32} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Skills</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>React.js / Next.js</li>
              <li>Node.js / Express.js</li>
              <li>MongoDB / PostgreSQL</li>
              <li>TypeScript / JavaScript</li>
              <li>HTML5 / CSS3 / SASS</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Experience</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Developed scalable full-stack applications for various clients</li>
              <li>Implemented real-time features using WebSockets</li>
              <li>Optimized frontend performance for high-traffic websites</li>
              <li>Worked in agile teams to deliver projects on time</li>
              <li>Mentored junior developers and contributed to open-source projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
