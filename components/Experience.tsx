import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experience({}: Props) {
  const experiences = [
    {
      id: 1,
      jobName: 'Frontend Developer',
      company: 'Andalin',
      startDate: 'February 2022',
      endDate: 'Present',
      techStacks: [
        { id: 1, title: 'Vue.js', iconUrl: 'https://img.icons8.com/color/344/vue-js.png' },
        {
          id: 2,
          title: 'Nuxt.js',
          iconUrl: 'https://upload.vectorlogo.zone/logos/nuxtjs/images/301439c2-1779-4826-89c9-5767327ce150.svg',
        },
        {
          id: 3,
          title: 'Bootstrap CSS',
          iconUrl: 'https://img.icons8.com/color/512/bootstrap.png',
        },
        {
          id: 4,
          title: 'Tailwind CSS',
          iconUrl: 'https://img.icons8.com/fluency/512/tailwind_css.png',
        },
        {
          id: 5,
          title: 'Saas',
          iconUrl: 'https://img.icons8.com/color/344/sass.png',
        },
        {
          id: 6,
          title: 'Github',
          iconUrl: 'https://img.icons8.com/ios-glyphs/344/github.png',
        },
      ],
      jobDesc: [
        {
          id: 1,
          desc: 'Responsible to translate design website page into code.',
        },
        {
          id: 2,
          desc: 'Pairing with backend team about new feature or improvement.',
        },
        {
          id: 3,
          desc: 'Building reusable code for future use & constantly maintaining it.',
        },
        {
          id: 4,
          desc: 'Revamping company profile website with new popular & modern technologies.',
        },
      ],
    },
  ]
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
      className="relative mx-auto flex max-w-full flex-col items-center justify-center overflow-hidden text-left md:h-screen md:px-10"
    >
      <h3 className="mb-6 indent-5 text-2xl uppercase tracking-[20px] text-gray-500">Experience</h3>
      {/* Delete justify-center class below if there are more than 1 experience */}
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll px-6 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#047857]/50 md:justify-center md:px-10">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
