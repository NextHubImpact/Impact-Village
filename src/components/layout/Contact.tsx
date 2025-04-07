"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    setSubmitted(true)
  }

  return (
    <div id="contact" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-[#05092D]">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's start a conversation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Interested in working with us? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-8xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">Get in touch</h3>
            <p className="mt-4 text-base text-gray-600">
              Our team is here to answer your questions about Impact Village and how we can help your organization
              create collective impact.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-x-4 items-start">
                <div className="h-10 w-10 flex-none rounded-full bg-[#F7DEB3FF] flex items-center justify-center">
                  <svg className="h-5 w-5 text-[#F4A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">Phone</h4>
                  <p className="mt-1 text-sm text-gray-600">+233 24 453 4836</p>
                </div>
              </div>

              <div className="flex gap-x-4 items-start">
                <div className="h-10 w-10 flex-none rounded-full bg-[#F7DEB3FF] flex items-center justify-center">
                  <svg className="h-5 w-5 text-[#F4A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-sm text-gray-600">impactvillage1@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-x-4 items-start">
                <div className="h-10 w-10 flex-none rounded-full bg-[#F7DEB3FF] flex items-center justify-center">
                  <svg className="h-5 w-5 text-[#F4A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">Address</h4>
                  <p className="mt-1 text-sm text-gray-600">
                  Ghana, Kasoa Street, <br />
                    New Market Road
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="flex justify-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Thank you for your message!</h3>
                <p className="mt-2 text-sm text-gray-600">We've received your inquiry and will get back to you as soon as possible.</p>
                <Button
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500 bg-white border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500 bg-white border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                    Organization
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500 bg-white border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500 bg-white border"
                    />
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full rounded-md bg-[#05092D] text-white hover:bg-yellow-500 ">
                    Send message
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our <a href="#" className="text-violet-600 hover:text-violet-500">privacy policy</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
