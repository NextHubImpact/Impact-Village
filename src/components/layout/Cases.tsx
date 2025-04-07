"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const cases = [
  {
    name: 'Sustainable Finance Initiative',
    client: 'Global Financial Services',
    description: 'Facilitated a cross-sector initiative to develop sustainable finance practices across 12 financial institutions.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Financial Services',
  },
  {
    name: 'Healthcare Innovation Coalition',
    client: 'Regional Healthcare Alliance',
    description: 'Designed and implemented a collaborative platform for healthcare organizations to share knowledge and innovations.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Healthcare',
  },
  {
    name: 'Sustainable City Project',
    client: 'Metropolitan City Council',
    description: 'Developed a community-driven approach to urban sustainability, engaging citizens and local businesses.',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    category: 'Public Sector',
  },
  {
    name: 'Corporate Innovation Academy',
    client: 'Tech Industry Consortium',
    description: 'Designed a learning program to foster collective innovation capabilities across multiple technology companies.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Technology',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Cases() {
  return (
    <div id="cases" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-violet-600">Cases</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our impact in action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how we've helped organizations across sectors create collective impact
            through sustainable transformation.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cases.map((case_item) => (
            <motion.div key={case_item.name} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={case_item.image}
                      alt={case_item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-x-2 text-xs text-violet-600 font-medium mb-2">
                      <span className="bg-violet-50 px-2 py-1 rounded-full">
                        {case_item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{case_item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{case_item.client}</p>
                    <p className="mt-3 text-sm text-gray-600 flex-grow">{case_item.description}</p>
                    <div className="mt-4">
                      <Button variant="ghost" className="p-0 h-auto text-violet-600 hover:text-violet-700 font-medium text-sm flex items-center gap-x-1">
                        Read case study
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="mt-8 border-violet-200 hover:bg-violet-50">
            View all case studies
          </Button>
        </div>
      </div>
    </div>
  )
}
