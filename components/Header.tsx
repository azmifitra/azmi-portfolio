import React from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between px-5 py-2 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        <SocialIcon
          className="cursor-pointer hover:opacity-80"
          network="instagram"
          fgColor="#047857"
          bgColor="transparent"
          url="https://www.instagram.com/azmiftrd/"
          target="_blank"
        />
        <SocialIcon
          className="cursor-pointer hover:opacity-80"
          network="twitter"
          fgColor="#047857"
          bgColor="transparent"
          url="https://twitter.com/azmifitra_"
          target="_blank"
        />
        <SocialIcon
          className="cursor-pointer hover:opacity-80"
          network="linkedin"
          fgColor="#047857"
          bgColor="transparent"
          url="https://www.linkedin.com/in/azmifitra/"
          target="_blank"
        />
        <SocialIcon
          className="cursor-pointer hover:opacity-80"
          network="github"
          fgColor="#047857"
          bgColor="transparent"
          url="https://github.com/azmifitra"
          target="_blank"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="group flex cursor-pointer items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer hover:opacity-80"
          network="email"
          fgColor="#047857"
          bgColor="transparent"
          url="#contact"
        />
        <p className="hidden text-sm font-medium uppercase text-[#047857] md:inline-flex">Get In Touch</p>
      </motion.div>
    </header>
  )
}

export default Header
