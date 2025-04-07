"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Emma Richards",
    role: "Founder & CEO",
    bio: "Emma has over 20 years of experience in organizational transformation and collective impact methodologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "ER",
  },
  {
    name: "Michael Chen",
    role: "Co-founder & Innovation Director",
    bio: "Michael specializes in knowledge-sharing platforms and creating innovative methodologies for sustainable transformation.",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "MC",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Facilitation",
    bio: "Sarah is an expert facilitator with a background in conflict resolution and collaborative decision-making.",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "SJ",
  },
  {
    name: "David Nguyen",
    role: "Senior Coach",
    bio: "David has coached executives and teams across 15+ countries, specializing in sustainability and purpose-driven leadership.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "DN",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function WhoWeAre() {
  return (
    <div id="who-we-are" className="py-24 sm:py-31 bg-gray-50">
          <AboutHero/>
      {/* <div className="h-60 bg-black flex items-center justify-center bg-cover bg-center  ">
        <span className="text-white text-md bg-black/50 px-4 py-2 rounded-md">
          About Us
        </span>
      </div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Story
            </h3>
            <div className="w-12 h-1 bg-[#F4A623] mt-2"></div>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Impact Village was founded with a clear and compelling mission: to
              empower youth and communities by bridging the digital and social
              divide. We recognize that today’s most pressing challenges require
              inclusive and innovative solutions, fostering collaboration across
              different sectors and backgrounds.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Over the years, we have developed a transformative approach that
              integrates digital literacy, social well-being, and community
              engagement. By leveraging technology, mentorship, and strategic
              partnerships, we create sustainable impact, equipping individuals
              with the skills and knowledge needed to thrive in a rapidly
              evolving world.
            </p>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration session"
              className="w-full rounded-1xl shadow-lg"
            />
          </div>
        </div>

        {
          <div className="mx-auto max-w-7xl lg:mx-0 lg:text-center sm:py-32">
            {/* <h2 className="text-base font-semibold leading-7 text-violet-600 lg:text-center">
              Who We Are
            </h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-center">
              The team behind Impact Village
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Our team is made up of passionate professionals dedicated to
              empowering communities through digital skills, mentorship, and
              social well-being programs. With diverse expertise in technology,
              education, and community development, we are committed to creating
              an inclusive and innovative environment where individuals can
              thrive and reach their full potential.
            </p>
          </div>
        }

        {
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {team.map((person) => (
              <motion.div key={person.name} variants={itemVariants}>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Avatar className="h-full w-full object-cover transition duration-500 group-hover:scale-105">
                      <AvatarImage src={person.imageUrl} alt={person.name} />
                      <AvatarFallback className="text-lg">
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-[#05092D]">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        }
      </div>
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex justify-center items-center text-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/523262976/photo/about-us-concept-with-alphabet-blocks.webp?a=1&b=1&s=612x612&w=0&k=20&c=ivgQiyyuES6Gt7NYF8G84weQ0_iBWNSuERvtcW8Fhu0=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            ABOUT <span className="text-purple-400">US</span>
          </h1>
          
        </div>
      </div>

      {/* Wave Divider */}


      {/* Programs Section */}
     
    </section>
  );
}
