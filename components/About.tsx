import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import imageAboutPic from '../assets/images/azmi-cover.jpg'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        opacity: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-10 text-center md:text-left"
    >
      <h3 className="mb-5 indent-5 text-2xl uppercase tracking-[20px] text-gray-500 md:mb-8">About</h3>

      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          className="mb-6 flex-shrink-0 md:mb-0"
        >
          <Image
            src={imageAboutPic}
            alt="azmi-avatar"
            className="h-36 w-36 rounded-full object-cover md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[600px]"
          />
        </motion.div>
        <div className="space-y-5 px-0 md:space-y-10 md:px-10">
          <h4 className="text-3xl font-semibold md:text-4xl">
            Here is my <span className="underline decoration-[#047857]">little</span> background
          </h4>
          <p className="text-base">
            Currently working as a Frontend developer who have a passion for creating visually stunning and
            user-friendly websites and applications. My goal is to create visually appealing and seamless user
            experiences that will make the website or application stand out from the rest. Also, always looking for new
            ways to improve the user experience and stay up-to-date with the latest frontend technologies.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
