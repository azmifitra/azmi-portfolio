import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

import iconReactjs from '../assets/icons/react.png'

type Props = {}

function Experience({}: Props) {
  const experiences = [
    {
      id: 1,
      jobName: 'Frontend Developer',
      company: 'Andalin',
      startDate: 'February 2022',
      endDate: 'March 2023',
      image:
        'data:image/png;base64,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',
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
    {
      id: 2,
      jobName: 'Fullstack Developer',
      company: 'Astra Graphia Technology',
      startDate: 'March 2023',
      endDate: 'Present',
      image:
        'https://media.licdn.com/dms/image/D560BAQFPU9lYt9Osiw/company-logo_200_200/0/1691028661547/pt_astra_graphia_information_technology_logo?e=2147483647&v=beta&t=DmlCMv5JaF7tAWe9y0gaOd4zx9v_y9PCUMNxrujdLnY',
      techStacks: [
        {
          id: 1,
          title: 'Javascript',
          iconUrl: 'https://img.icons8.com/?size=48&id=tGvHBPJaKqEd',
        },
        {
          id: 2,
          title: 'Typescript',
          iconUrl: 'https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png',
        },
        {
          id: 3,
          title: 'Golang',
          iconUrl: 'https://img.icons8.com/?size=48&id=44442&format=png',
        },
        { id: 4, title: 'React.js', iconUrl: 'https://img.icons8.com/?size=80&id=25Sjy8fKExYA&format=png' },
        {
          id: 5,
          title: 'Strapi.io',
          iconUrl:
            'https://assets.super.so/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png',
        },
        {
          id: 6,
          title: 'Git',
          iconUrl: 'https://img.icons8.com/?size=48&id=20906&format=png',
        },
      ],
      jobDesc: [
        {
          id: 1,
          desc: 'Utilized modern languages and libraries such as Typescript, React and NextJS on Frontend and Node.js and Golang on Backend.',
        },
        {
          id: 2,
          desc: 'Developed reusable React components and libraries to streamline the development process and enhance code maintainability.',
        },
        {
          id: 3,
          desc: 'Developed and maintained 40+ Rest APIs in accordance with the specified requirements and documentation.',
        },
        {
          id: 4,
          desc: 'Successfully addressed 98% of the assigned bugs found in various frontend and backend codes effectively.',
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
      <h3 className="mb-6 indent-5 text-2xl uppercase tracking-[20px] text-gray-500">Experiences</h3>
      {/* Delete justify-center class below if there are more than 1 experience */}
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll px-6 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#047857]/50 md:px-10">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
