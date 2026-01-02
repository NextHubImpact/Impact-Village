"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Globe, Users2, BarChart3, Rocket, Building2, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function SustainableImpactDetails() {
  const strategies = [
    {
      title: "Digital Inclusion",
      description: "Bridging the gap by bringing technology to underserved and rural areas.",
      icon: <Globe className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "Strategic Partnerships",
      description: "Collaborating with businesses and schools to create a robust ecosystem.",
      icon: <Building2 className="h-6 w-6 text-[#F4A623]" />
    },
    {
      title: "Economic Opportunities",
      description: "Connecting our graduates directly to internships, jobs, and entrepreneurship.",
      icon: <Briefcase className="h-6 w-6 text-[#F4A623]" />
    }
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

      {/* Hero / Mission Statement */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base font-semibold leading-7 text-[#F4A623] uppercase tracking-wide">
                Our Core Mission
              </h2>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#05092D] sm:text-6xl">
                Sustainable Impact
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                We drive long-term change by advocating for digital inclusion, engaging communities in 
                meaningful initiatives, and forming strategic partnerships with educational institutions, 
                businesses, and stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 2,500 Goal Section */}
      <section className="py-16 bg-[#05092D] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-[#F4A623] text-sm font-medium mb-6 border border-yellow-500/20">
                <Rocket className="h-4 w-4" />
                2026 - 2027 Vision
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Our 2-Year Roadmap</h2>
              <p className="text-gray-300 text-lg mb-8">
                Over the next two years, we are committed to providing high-level training for 
                <span className="text-[#F4A623] font-bold"> 2,500 young people</span>. 
                Our focus is supporting them with:
              </p>
              <ul className="space-y-4">
                {[
                  "Access to advanced digital skills",
                  "Sustainable vocational training",
                  "Facilitated access to economic opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#F4A623]" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm text-center">
                <BarChart3 className="h-16 w-16 text-[#F4A623] mx-auto mb-4" />
                <div className="text-6xl font-bold text-white mb-2">2,500</div>
                <div className="text-[#F4A623] font-medium tracking-widest uppercase">Target Lives Impacted</div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#F4A623]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {strategies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mx-auto h-16 w-16 rounded-2xl bg-[#F7DEB3FF] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#05092D] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action: Partner with Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#F4A623] p-8 md:p-16 overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-[#05092D]">
                <h2 className="text-3xl font-bold mb-4">Strengthen Our Community</h2>
                <p className="text-lg font-medium opacity-90">
                  By working together, we ensure that digital and social transformation is accessible to all. 
                  Join us as a partner or stakeholder.
                </p>
              </div>
              <Button asChild size="lg" className="bg-[#05092D] text-white hover:bg-white hover:text-[#05092D] transition-all px-10 py-7 text-lg rounded-xl">
                <Link href="/#contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}