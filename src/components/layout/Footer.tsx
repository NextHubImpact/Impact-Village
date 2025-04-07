"use client"

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Who we are', href: '/who-we-are' },
    { name: 'What we do', href: '/what-we-do' },
    { name: 'Our impact', href: '/our-impact' },
//     { name: 'Cases', href: '#cases' },
//     { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Facilitation', href: '#' },
    { name: 'Training', href: '#' },
//     { name: 'Coaching', href: '#' },
    { name: 'Knowledge Sharing', href: '#' },
    { name: 'Measurement', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '/data-privacy' },
    { name: 'Terms', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61574683991990',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/impact_vil56033',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#05092D]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
            <span className="text-yellow-500">I</span>mpact<span className="">Village</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
            Empowering youth and communities to drive sustainable digital and social transformation..
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <div className="flex items-start gap-x-2">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Ghana, Kasoa Street, <br />
                        New Maket Road
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-x-2">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-300">+233 24 453 4836</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-x-2">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-300">impactvillage1<br />@gmail.com</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} ImpactVillage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
