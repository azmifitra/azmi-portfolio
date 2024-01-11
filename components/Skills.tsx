import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { LayoutGroup } from 'framer-motion'

import iconReactjs from '../assets/icons/react.png'
import iconVuejs from '../assets/icons/vue.png'
import iconNextjs from '../assets/icons/nextjs.png'
import iconNuxtjs from '../assets/icons/nuxtjs.svg'
import iconTailwind from '../assets/icons/tailwind.png'
import iconBootstrap from '../assets/icons/bootstrap.png'
import iconNodejs from '../assets/icons/nodejs.png'
import iconGithub from '../assets/icons/github.png'

type Props = {}

function Skills({}: Props) {
  const skills = [
    {
      id: 1,
      name: 'ReactJS',
      iconUrl: iconReactjs,
      proficiency: '85%',
      directionLeft: true,
    },
    {
      id: 2,
      name: 'VueJS',
      iconUrl: iconVuejs,
      proficiency: '90%',
      directionLeft: true,
    },
    {
      id: 3,
      name: 'Next.js',
      iconUrl: iconNextjs,
      proficiency: '70%',
      directionLeft: true,
    },
    {
      id: 4,
      name: 'Nuxt.js',
      iconUrl: iconNuxtjs,
      proficiency: '90%',
      directionLeft: true,
    },
    {
      id: 5,
      name: 'Tailwind CSS',
      iconUrl: iconTailwind,
      proficiency: '100%',
      directionLeft: false,
    },
    {
      id: 6,
      name: 'Bootstrap CSS',
      iconUrl: iconBootstrap,
      proficiency: '100%',
      directionLeft: false,
    },
    {
      id: 7,
      name: 'Node.js',
      iconUrl: iconNodejs,
      proficiency: '90%',
      directionLeft: false,
    },
    {
      id: 8,
      name: 'Github',
      iconUrl: iconGithub,
      proficiency: '85%',
      directionLeft: false,
    },
  ]
  return (
    <motion.div className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:px-10">
      <h3 className="text-2xl uppercase tracking-[20px] text-gray-500">Skills</h3>
      <h3 className="mt-2 text-sm uppercase tracking-[3px] text-gray-500">
        <span className="hidden md:inline">Hover</span> <span className="inline md:hidden">Click</span> over a skill for
        currency proficiency
      </h3>

      <div className="mt-8 md:grid md:grid-cols-4 md:gap-5">
        <LayoutGroup>
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </LayoutGroup>
      </div>
    </motion.div>
  )
}

export default Skills
