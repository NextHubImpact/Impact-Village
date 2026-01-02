"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Laptop, ShieldCheck, Code2, GraduationCap, PlayCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RS3 from "@/assets/RS3.jpeg";

export default function DigitalEmpowermentDetails() {
  const features = [
    {
      title: "Digital Literacy",
      description: "Mastering essential computer skills for the modern workplace.",
      icon: <Laptop className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "Coding & Web Development",
      description: "Learning the languages of the web to build digital solutions.",
      icon: <Code2 className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "AI & Cyber Safety",
      description: "Navigating the future of AI while staying secure online.",
      icon: <ShieldCheck className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "Career Readiness",
      description: "Equipping all age groups with tech skills for the job market.",
      icon: <GraduationCap className="h-6 w-6 text-[#F4A623]" />
    }
  ]

  // Add your image paths here
  const galleryImages = [
    { src: RS3.src, alt: "Students learning coding", title: "Coding Workshop 2025" },
    { src: "", alt: "Digital literacy class", title: "Rural Outreach Program" },
    { src: "", alt: "Advanced IT training", title: "Youth Tech Summit" },
    { src: "", alt: "Mentorship session", title: "One-on-One Mentoring" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#05092D] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/what-we-do" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#F4A623] transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Digital Empowerment</h1>
              <p className="mt-6 text-lg text-gray-300">
                Transforming communities through technology. Our past programs have reached over 500+ students, 
                bridging the digital divide across Ghana.
              </p>
              <div className="mt-8">
                 <Button asChild className="bg-[#F4A623] hover:bg-white text-[#05092D] px-8 py-6">
                    <Link href="/contact-us">Join Us</Link>
                 </Button>
              </div>
            </motion.div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              {/* Replace URL with your actual Video Link */}
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/G7Cfv2FASEo" 
                title="Impact Village Program Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Program Gallery Section */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#05092D]">Impact in Action</h2>
          <p className="text-gray-600 mt-2">A glimpse into our current and past empowerment sessions.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03 }}
              className="group relative h-72 rounded-xl overflow-hidden shadow-lg bg-gray-100"
            >
              <img src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-bold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum / Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Students Learn</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-[#F7DEB3FF] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#05092D] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Past Video Testimonial */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F4A623]/10 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#05092D] mb-6">Past Program Success</h2>
              <p className="text-gray-700 text-lg italic">
                "Before Impact Village, I had never touched a laptop. Today, I am building websites for small 
                businesses in Kasoa. This program changed my life."
              </p>
              <p className="mt-4 font-bold text-[#05092D]">— Program Graduate, 2024</p>
            </div>
            <div className="lg:w-1/2 w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-[#05092D] flex items-center justify-center relative group">
              {/* This represents another video placeholder */}
              <PlayCircle className="h-16 w-16 text-[#F4A623] group-hover:scale-110 transition-transform cursor-pointer" />
              <span className="absolute bottom-4 text-white text-sm font-medium">Watch Student Testimonial</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}