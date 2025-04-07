"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import logo from "../../assets/logo.jpg"
import logo from "@/assets/logo.png";
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home',  href: '/' },
  { name: 'About Us',  href: '/who-we-are' },
  { name: 'What we do', href: '/what-we-do' },
  { name: 'Our impact', href: '/our-impact' },
//   { name: 'Cases', href: '#cases' },
//   { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '/contact-us' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
  <span className="sr-only">Impact Village</span>
  <div className="flex items-center gap-2">
          
  <img src={logo.src} alt="Impact Village Logo" className="h-20 w-auto" />
    {/* <img src={logo} alt="Impact Village Logo" className="h-10 w-auto" /> */}
    {/* <img src={logo} alt="Impact Village Logo" className="h-10 w-auto" /> */}
  </div>
</Link>

        {/* <Link href="/" className="-m-1.5 p-1.5">
  <span className="sr-only">Impact Village</span>
  <div className="flex items-center gap-2">
    <span className="text-2xl font-bold text-[#05092D] drop-shadow-lg">
      <span className="text-yellow-500">I</span>mpact<span className="text-[#05092D]">Village</span>
    </span>
  </div>
</Link> */}

        </div>

        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent"
                >
                  Impact Village
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Let's talk
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-500 transition duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <Button className="rounded-md bg-[#05092D] text-white hover:bg-yellow-500">Let's talk</Button>
        </div>
      </nav>
    </header>
  )
}
