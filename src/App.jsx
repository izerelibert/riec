import { Box, Heading, Text, VStack, HStack, Button, useBreakpointValue, chakra } from "@chakra-ui/react";
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
const MotionBox = motion(chakra.div);
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
  <VStack align="start" spacing={6} as="section">
    <HStack spacing={3}>
      {icon && <Box className="text-accent">{icon}</Box>}
      <Heading
        as="h2"
        size="lg"
        className="text-primary font-montserrat drop-shadow"
        fontWeight="bold"
      >
        {title}
      </Heading>
    </HStack>
    {children}
  </VStack>
);

export default function App() {
  const heroFontSize = useBreakpointValue({ base: "3xl", md: "5xl", lg: "6xl" });

  return (
    <Box
      minH="100vh"
      px={4}
      py={12}
      className="bg-gradient-to-br from-background via-black to-gray-950 text-text font-montserrat flex flex-col justify-center items-center text-center"
    >
      <VStack spacing={24} maxW="6xl" w="full" align="center">
        {/* Hero */}
        <MotionBox
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
          as="header"
          w="full"
          textAlign="center"
          spacing={4}
        >
          <HStack justify="center" spacing={4}>
            <Box
              as="img"
              src={logo}
              alt="RIEC Logo"
              boxSize="150px"
              className="rounded-full shadow-lg ring-4 ring-primary bg-white/10"
            />
          </HStack>
          <Heading
            as="h1"
            fontSize={heroFontSize}
            fontWeight="extrabold"
            className="text-primary font-montserrat drop-shadow-xl"
            mt={4}
          >
            Room of Innovative and of Engineering Construction (RIEC)
          </Heading>
          <Text
            fontSize="xl"
            mt={2}
            className="text-text/80 max-w-xl mx-auto font-roboto"
          >
            Innovative Civil Engineering Solutions for a Sustainable Future
          </Text>
        </MotionBox>

        {/* Services */}
        <MotionBox
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
          className="bg-black/60 p-8 rounded-2xl shadow-xl border border-border backdrop-blur-md w-full"
        >
          <Section title="Our Services" icon={<FaBuilding />}>
            <Box as="ul" className="list-disc pl-6 text-text/90 space-y-2 font-roboto">
              {services.map((service, i) => (
                <Box as="li" key={i} className="transition-colors hover:text-accent">
                  {service}
                </Box>
              ))}
            </Box>
          </Section>
        </MotionBox>

        {/* Projects */}
        <MotionBox
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeInUp}
          w="full"
        >
          <Section title="Highlighted Projects">
            <Box className="grid md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <Box
                  key={i}
                  className="bg-black/60 p-6 rounded-xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300"
                >
                  <Heading
                    as="h3"
                    fontSize="xl"
                    className="text-primary font-montserrat font-semibold"
                  >
                    {p.title}
                  </Heading>
                  <Text className="text-text/80 mt-2 font-roboto">{p.description}</Text>
                </Box>
              ))}
            </Box>
          </Section>
        </MotionBox>

        {/* Team */}
        <MotionBox
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeInUp}
          w="full"
        >
          <Section title="Meet the Team" icon={<FaUsers />}>
            <Box className="grid md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <Box
                  key={i}
                  className="bg-black/60 p-6 rounded-xl text-center shadow-lg border border-border"
                >
                  <Heading
                    as="h3"
                    fontSize="xl"
                    className="text-primary font-montserrat font-bold"
                  >
                    {member.name}
                  </Heading>
                  <Text className="text-text/70 font-roboto">{member.role}</Text>
                </Box>
              ))}
            </Box>
          </Section>
        </MotionBox>

        {/* Testimonials */}
        <MotionBox
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeInUp}
          w="full"
        >
          <Section
            title="What Our Clients Say"
            icon={<FaQuoteLeft className="inline-block" />}
          >
            <Box className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <Box
                  key={i}
                  className="bg-black/60 p-6 rounded-xl shadow-lg border-l-4 border-accent border border-border"
                >
                  <Text className="italic text-text/90 mb-4 font-roboto">
                    "{t.quote}"
                  </Text>
                  <Text className="text-accent font-semibold font-montserrat">
                    — {t.name}
                  </Text>
                </Box>
              ))}
            </Box>
          </Section>
        </MotionBox>

        {/* CTA */}
        <MotionBox
          initial="hidden"
          animate="visible"
          custom={6}
          variants={fadeInUp}
          as="section"
          w="full"
          textAlign="center"
          spacing={4}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            className="text-primary font-montserrat drop-shadow"
          >
            Let's Build the Future Together
          </Heading>
          <Button
            as="a"
            href="mailto:info@riec.com"
            leftIcon={<FaEnvelope />}
            size="lg"
            className="bg-accent text-black rounded-xl text-lg font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            _hover={{ bg: "var(--color-primary)", color: "white" }}
          >
            Contact Us
          </Button>
          <Text className="text-sm text-text/60 mt-4 font-roboto">
            &copy; {new Date().getFullYear()} RIEC Civil Engineering. All rights reserved.
          </Text>
        </MotionBox>
      </VStack>
    </Box>
  );
}