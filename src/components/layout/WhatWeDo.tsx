"use client";

import { motion } from "framer-motion";
import img3 from "@/assets/RS2.png";
import RS3 from "@/assets/RS3.jpeg";
import Link from 'next/link'
import {
  Check,
  Users,
  UserCog,
  Brain,
  LineChart,
  Presentation,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  //   {
  //     name: 'Facilitation',
  //     description: 'We facilitate workshops and events to bring people together and co-create solutions.',
  //     icon: Users,
  //   },
  {
    name: "Workshops & Training",
    description:
      "We conduct hands-on training sessions and workshops that equip individuals with digital skills, social well-being strategies, and leadership development.",
    imapact1: "Collaborative learning approach",
    imapact2: "Practical, real-world applications",
    imapact3: "Measurable impact on community development",
    icon: Presentation,
  },
  {
    name: "Mentorship & Coaching",
    description:
      "We offer mentorship programs to guide youth and community members in career development, entrepreneurship, and digital literacy.",
    imapact1: "Personalized guidance and support",
    imapact2: "Expert-led mentorship networks",
    imapact3: "Growth-focused coaching",
    icon: UserCog,
  },
  {
    name: "Community Engagement & Knowledge Sharing",
    description:
      "We facilitate community-driven initiatives, discussions, and digital learning platforms to enhance knowledge sharing and collaboration.",
    imapact1: "Inclusive and interactive engagement",
    imapact2: "Technology-driven solutions",
    imapact3: "Sustainable community transformation",
    icon: Brain,
  },
  {
    name: "Impact Measurement & Evaluation",
    description:
      "We track and assess the impact of our programs to ensure continuous improvement and effectiveness in creating long-term change.",
    imapact1: "Data-driven decision-making",
    imapact2: "Continuous feedback and program refinement",
    imapact3: "Transparent and measurable outcomes",
    icon: LineChart,
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

export default function WhatWeDo() {
  return (
    <div id="what-we-do" className="py-24 sm:py-31 bg-gray-50">
      <OurProgramsHeroSection />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-16">
          All we want is to develop your skills for sustainable development
          </p>
          <p className="mt-0 text-lg leading-8 text-gray-600">
          We empower youth and communities with essential skills and knowledge to drive digital innovation and social transformation.
          </p>
        </div>

        <ImpactPrograms />
      </div>
    </div>
  );
}

function OurProgramsHeroSection() {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center flex justify-center items-center text-center"
        style={{
          backgroundImage:
            "url(" + img3.src + ")",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            OUR <span className="text-purple-400">PROGRAMS</span>
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-bold">
            WE STRIVE TO MAKE THE WORLD MORE{" "}
            <span className="italic text-green-400">SUSTAINABLE</span> AND{" "}
            <br />
            <span className="text-purple-400">COLLABORATIVE</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ImpactPrograms() {
  return (
    // x-10 py-1 mx-auto max-w-7xl px-6 lg:px-8
    <section className=" py-12 px-0">
      {/* Digital Empowerment */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <img
          src={RS3.src}
          alt="SCILLS Program"
          className="rounded-lg shadow-lg w-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-black">
          DIGITAL EMPOWERMENT
          </h2>

          <p className="mt-4 text-gray-600">
          We believe that access to digital education and technology is essential for future success. Our programs provide:
          </p>
          <p className="mt-2 text-gray-600">
          Through digital empowerment, we provide comprehensive training in digital literacy, technology, and innovation
          </p>
          <p className="mt-2 text-gray-600">
          Our programs equip individuals with essential tech skills, including coding, web development, AI,Cyber Safety and software training, ensuring they are prepared for the evolving job market and can actively participate in the digital economy
          </p>
          <p className="mt-2 text-gray-600">
            The curriculum contains contents for all age groups to help build their digital litracy for good.
          </p>
          <Link href="/digital-skills" className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-lg mt-4 inline-block">
            Learn More
          </Link>
        </div>
      </div>

      {/*Community Well-being */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-black">
          COMMUNITY WELL-BEING
          </h2>
          <p className="mt-4 text-gray-600">
          Beyond technology, we prioritize community well-being by fostering mentorship, leadership development, and mental health support.
          </p>
          <p className="mt-2 text-gray-600">
          We believe that personal growth is just as important as technical skills, so we create opportunities for individuals to build confidence, develop career pathways, and gain life skills that set them up for success.
          </p>
          <p className="mt-2 text-gray-600">
           Impact Village is working with stakeholders to expand this program to more communities.
          </p>
          <Link href="/community-wellbeing" className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-lg mt-4 inline-block">
            Learn More
          </Link>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1723773631613-a5a6018a1c3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGFmcmljYW4lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
          alt="Women in Digital Skills"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

  {/* Sustainable Impact*/}
  <div className="grid md:grid-cols-2 gap-8 items-center py-12">
        <img
          src="https://plus.unsplash.com/premium_photo-1723773631613-a5a6018a1c3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGFmcmljYW4lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
          alt="SCILLS Program"
          className="rounded-lg shadow-lg w-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-black">
          SUSTAINABLE IMPACT
          </h2>

          <p className="mt-4 text-gray-600">
          Sustainable impact is at the core of our mission. We drive long-term change by advocating for digital inclusion, engaging communities in meaningful initiatives, and forming strategic partnerships with educational institutions, businesses, and stakeholders
          </p>
          <p className="mt-2 text-gray-600">
          By working together, we create opportunities that empower individuals and strengthen communities, ensuring that digital and social transformation is accessible to all
          </p>
          <p className="mt-2 text-gray-600">
            Over the next two years, we will provide training for 2,500 young
            people supporting them with access to digtal skills, sustainable skills,
            and facilitating their access to economic opportunities.
          </p>
          {/* <p className="mt-2 text-gray-600">
            The curriculum includes Content Creation, Search Engine Optimization
            (SEO), and Internet Security.
          </p> */}
         <Link href="/sustainable" className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-lg mt-4 inline-block">
            Learn More
          </Link>
        </div>
      </div>




      
    </section>
  );
}
