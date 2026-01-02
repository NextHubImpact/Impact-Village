import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export const metadata = {
  title: "Data Privacy — Impact Village",
  description: "Our data privacy policy and how we handle your personal information",
}

export default function DataPrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-32">
        <Link href="/" className="inline-flex items-center text-sm text-violet-600 font-medium hover:text-violet-800 mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Data Privacy</h1>

        <div className="mt-10 prose prose-violet prose-lg">
          <p className="lead">
            Impact Village deals with the personal data transmitted to it in accordance with the legislation
            in force, and in particular the law of 8 December 1992.
          </p>

          <h2>Who is responsible for processing your data?</h2>
          <p>
            Impact Village is responsible for processing the personal data that you provide to us through our website,
            contact forms, or other communication channels. We are committed to protecting your privacy and ensuring
            the security of your personal information.
          </p>

          <h2>What data do we collect?</h2>
          <p>
            The data collected may include your name, email address, phone number, organization, job title,
            and other information relevant to our business relationship. We only collect information that is
            necessary for providing our services and maintaining our relationship with you.
          </p>

          <h2>How do we use your data?</h2>
          <p>
            We use your data for the following purposes:
          </p>
          <ul>
            <li>To respond to your inquiries and provide information about our services</li>
            <li>To manage our business relationship and provide our services</li>
            <li>To send you relevant information and updates about our activities, events, and services</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Your rights</h2>
          <p>
            You have the right to access, rectify, and delete your personal data. You also have the right to oppose
            the processing of your data, to limit its processing, and to request the portability of your data.
            To exercise these rights, please contact us at privacy@impact-valley.com.
          </p>

          <h2>Security of your data</h2>
          <p>
            We implement appropriate technical and organizational measures to ensure the security of your personal
            data against unauthorized access, loss, or alteration.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions or concerns about our data privacy practices, please contact us at
            privacy@impact-valley.com or through the contact form on our website.
          </p>
        </div>

        <div className="mt-12">
          <Button asChild>
            <Link href="/contact-us">Contact us about privacy</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
