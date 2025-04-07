"use client"

// import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import OurValues from '@/components/layout/ourValues'
import PopularCourses from '@/components/layout/ourPrograms'
// import { div } from 'framer-motion/m'
export default function Hero() {
  return (
          
   <div>
         <div className="relative isolate overflow-hidden">
      {/* Hero image background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
          alt="Team collaboration session"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:py-56 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          {/* <div className="mb-8">
            <span className="inline-flex rounded-full bg-violet-600/30 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-violet-500/40">
              Collective Impact
            </span>
          </div> */}

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-yellow-500 sm:text-6xl">
          Empowering Youth & Communities for{' '}
            <span className="bg-gradient-to-r from-violet-300 to-violet-100 bg-clip-text text-white">
              collective impact
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-100">
          We empower individuals and communities through facilitation, training, and mentorship to drive meaningful change. Our approach fosters collaboration, innovation, and shared learning for sustainable social and digital transformation.
          </p>

          <div className="mt-10 flex justify-center gap-x-6">
            {/* <Button size="lg" className="rounded-md bg-white text-violet-900 hover:bg-gray-100">
              Discover our approach
            </Button> */}
            {/* <Button
              variant="outline"
              className="rounded-md border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#cases">
                View our cases <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </Button> */}
          </div>
        </motion.div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-violet-600 to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div> 
          <OurValues/>
          <PopularCourses/>

          
   </div>
  )
}
