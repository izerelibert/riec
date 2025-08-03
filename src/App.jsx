import { motion } from "framer-motion";
import {
  FaHardHat,
  FaBuilding,
  FaUsers,
  FaQuoteLeft,
  FaEnvelope,
} from "react-icons/fa";
import logo from "./assets/logo.jpg";

// Animation config
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6 },
  }),
};

// Static data
const services = [
  "Structural Engineering & Analysis",
  "Project Management & Consulting",
  "Site Development & Planning",
  "Sustainable & Green Building Solutions",
];

const projects = [
  {
    title: "Kigali Convention Complex",
    description: "Structural design & supervision.",
  },
  {
    title: "Green Tower Apartments",
    description: "Sustainable multi-unit housing.",
  },
  {
    title: "Rwanda Infrastructure Upgrade",
    description: "Roads, water, and bridges.",
  },
];

const team = [
  { name: "Ing. Jean Bosco", role: "Structural Engineer" },
  { name: "Ing. Alice Niyonsaba", role: "Project Manager" },
  { name: "Eng. David Mugisha", role: "Sustainability Lead" },
];

const testimonials = [
  {
    name: "Paul M.",
    quote:
      "RIEC delivered exceptional quality and project management. Truly reliable.",
  },
  {
    name: "Sarah K.",
    quote:
      "Professional team, eco-conscious designs, and impressive timelines!",
  },
];

// Reusable Section Container
const Section = ({ title, icon, children }) => (
  <section className="space-y-6">
    <h2 className="text-3xl font-bold flex items-center gap-3">
      {icon && <span className="text-blue-400">{icon}</span>}
      {title}
    </h2>
    {children}
  </section>
);

// App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white px-4 py-12 font-sans flex flex-col justify-center items-center text-center">
      <div className="max-w-6xl w-full space-y-24">

        {/* Hero */}
        <motion.header
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-4">
            <img
              src={logo}
              alt="RIEC Logo"
              width={150}
              height={150}
              className="rounded-full shadow-md ring-2 ring-blue-400"
            />
          </div>
          <h1
            style={{ 
              fontFamily: "Montserrat, sans-serif",
              // fontWeight: "bold",
              fontSize: "1.5rem",
            }}
            className="text-5xl font-bold text-blue-400 font-montserrat"
          >
            Room of Innovative and of Engineering Construction (RIEC)
          </h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Innovative Civil Engineering Solutions for a Sustainable Future
          </p>
        </motion.header>

        {/* Services */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <Section title="Our Services" icon={<FaBuilding />}>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </Section>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeInUp}
        >
          <Section title="Highlighted Projects">
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-blue-400">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 mt-2">{p.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* Team */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeInUp}
        >
          <Section title="Meet the Team" icon={<FaUsers />}>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-xl text-center shadow-md"
                >
                  <h3 className="text-xl font-bold text-blue-400">
                    {member.name}
                  </h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeInUp}
        >
          <Section
            title="What Our Clients Say"
            icon={<FaQuoteLeft className="inline-block" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-xl shadow border-l-4 border-blue-400"
                >
                  <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
                  <p className="text-blue-300 font-semibold">— {t.name}</p>
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* CTA */}
        <motion.section
          initial="hidden"
          animate="visible"
          custom={6}
          variants={fadeInUp}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold">
            Let's Build the Future Together
          </h2>
          <a
            href="mailto:info@riec.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            <FaEnvelope />
            Contact Us
          </a>
          <p className="text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} RIEC Civil Engineering. All rights
            reserved.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
