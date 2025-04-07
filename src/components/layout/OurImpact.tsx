"use client";

import { motion } from "framer-motion";
import { Building, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Organizations",
    value: "200+",
    icon: Building,
    description: "Organizations partnered with",
  },
  {
    id: 2,
    name: "People",
    value: "10,000+",
    icon: Users,
    description: "People engaged in our programs",
  },
  {
    id: 3,
    name: "Countries",
    value: "25+",
    icon: Globe,
    description: "Countries where we operate",
  },
  {
    id: 4,
    name: "Impact Initiatives",
    value: "75+",
    icon: Award,
    description: "Successful initiatives launched",
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

export default function OurImpact() {
  return (
    <div id="our-impact" className="py-24 sm:py-27 text-white">
      <ImpactHeroSection />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

      
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-16">
          WHAT WE HAVE BEEN DOING
          </p>
          <p className="mt-0 text-lg leading-8 text-gray-600">
          Creating meaningful change together.
          </p>
          <p className="mt-0 text-lg leading-8 text-gray-600">
          Through our collective impact approach, we've helped organizations
            and communities achieve sustainable transformation across sectors
            and geographies
          </p>
        </div>
        {/* <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-base font-semibold leading-7 text-black">
            Our Impact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Creating meaningful change together
          </p>
          <p className="mt-6 text-lg leading-8 text-violet-100">
            Through our collective impact approach, we've helped organizations
            and communities achieve sustainable transformation across sectors
            and geographies.
          </p>
        </div> */}

        <motion.div
          className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="rounded-full bg-yellow-500 p-3 ring-2 ring-yellow-500">
                  <stat.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold leading-9 tracking-tight text-black">
                {stat.value}
              </h3>
              <p className="text-base font-semibold text-black">
                {stat.name}
              </p>
              <p className="mt-2 text-sm text-black">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-24 mx-auto max-w-3xl text-center">
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
            <h3 className="text-2xl font-bold mb-4 text-[#05092D]">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#05092D]">
                  Authenticity
                </h4>
                <p className="text-sm text-black">
                  We operate with integrity and transparency in all our
                  interactions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#05092D]">
                  Responsibility
                </h4>
                <p className="text-sm text-black">
                  We take ownership of our actions and their impact on people
                  and the planet.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#05092D]">
                  Creativity
                </h4>
                <p className="text-sm text-black">
                  We embrace innovative thinking to solve complex challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactHeroSection() {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center flex justify-center items-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1655720359248-eeace8c709c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjBjb21tdW5pdHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            OUR <span className="text-purple-400">IMPACT</span>
          </h1>
          {/* <p className="mt-4 text-xl md:text-3xl font-bold">
            WE STRIVE TO MAKE THE WORLD MORE{" "}
            <span className="italic text-green-400">SUSTAINABLE</span> AND{" "}
            <br />
            <span className="text-purple-400">COLLABORATIVE</span>
          </p> */}
        </div>
      </div>
    </section>
  );
}
