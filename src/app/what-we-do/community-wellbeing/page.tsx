"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Users, Heart, Lightbulb, TrendingUp, Handshake } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function CommunityWellBeingDetails() {
  const pillars = [
    {
      title: "Mentorship",
      description: "Connecting young leaders with experienced professionals to guide their career and personal growth.",
      icon: <Users className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "Mental Health Support",
      description: "Providing safe spaces and resources to ensure emotional resilience and psychological well-being.",
      icon: <Heart className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "Leadership Development",
      description: "Training the next generation of change-makers in public speaking, ethics, and community organizing.",
      icon: <TrendingUp className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "Life Skills & Confidence",
      description: "Workshops focused on financial literacy, time management, and building self-assurance.",
      icon: <Lightbulb className="h-6 w-6 text-[#F4A623]" />
    }
  ]

  const gallery = [
    { src: "/community-1.jpg", title: "Mentorship Session" },
    { src: "/community-2.jpg", title: "Leadership Workshop" },
    { src: "/community-3.jpg", title: "Community Meeting" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <Link href="/what-we-do" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#05092D] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to What We Do
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base font-semibold leading-7 text-[#F4A623] uppercase tracking-wide">
                Holistic Growth
              </h2>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#05092D] sm:text-6xl">
                Community Well-Being
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Beyond technology, we prioritize the human element. We believe that personal growth is just as important 
                as technical skills. Our program creates opportunities for individuals to build confidence, develop 
                career pathways, and gain life skills that set them up for long-term success.
              </p>
              <div className="mt-10">
                <Button asChild className="bg-[#05092D] hover:bg-yellow-500 text-white px-8 py-6 text-lg">
                  <Link href="/#contact">Get Involved</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="/wellbeing-1.jpg" alt="Mentorship" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                <img src="/wellbeing-2.jpg" alt="Leadership" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              </div>
              <div className="pt-8 space-y-4">
                <img src="/wellbeing-3.jpg" alt="Mental Health" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                <img src="/wellbeing-4.jpg" alt="Community" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#05092D] sm:text-4xl">Our Four Pillars of Support</h2>
            <p className="mt-4 text-gray-600">We nurture the whole individual to ensure they thrive in both their professional and personal lives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#F7DEB3FF] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#05092D]">{pillar.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#05092D] text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 lg:p-16 lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F4A623] text-sm font-medium mb-6">
                <Handshake className="h-4 w-4" />
                Partnering for Change
              </div>
              <h2 className="text-3xl font-bold mb-6">Expanding Our Reach</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Impact Village is actively working with local stakeholders, NGOs, and community leaders to expand our well-being 
                programs. By combining resources and expertise, we aim to bring mentorship and mental health support 
                to every community we serve.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#05092D]">
                <Link href="/#contact">Become a Stakeholder</Link>
              </Button>
            </div>
            <div className="lg:w-2/5 bg-[#F4A623] flex items-center justify-center p-12">
               <blockquote className="text-2xl font-serif italic text-[#05092D] text-center">
                 "Technology is the tool, but community is the foundation for success."
               </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}