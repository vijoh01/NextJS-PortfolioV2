import Navbar from '@/components/Navbar'
import React from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Knowledge from '@/components/Knowledge'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden p-0 m-0 border-0 outline-0">
      <Navbar />
      <Header />
      <About />
      <Knowledge />
      <Projects />
      <Contact />
      <Footer />
      <MobileNav />
    </main>
  )
}
