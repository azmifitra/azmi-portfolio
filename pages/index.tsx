import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#047857]/50">
      <Head>
        <title>Azmi Fitra Darajat - Portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="md:snap-start md:pt-12">
        <Hero />
      </section>

      <section id="about" className="md:snap-center">
        <About />
      </section>

      <section id="experience" className="md:snap-center">
        <Experience />
      </section>

      <section id="skills" className="md:snap-center">
        <Skills />
      </section>

      <section id="projects" className="md:snap-start">
        <Projects />
      </section>

      <section id="contact" className="md:snap-start">
        <ContactMe />
      </section>
    </div>
  )
}
