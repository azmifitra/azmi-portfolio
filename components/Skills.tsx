import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { LayoutGroup } from 'framer-motion'

import iconReactjs from '../assets/icons/react.png'
import iconVuejs from '../assets/icons/vue.png'
import iconJQuery from '../assets/icons/jquery.png'
import iconGit from '../assets/icons/git.png'
import iconHTML from '../assets/icons/html.png'
import iconCSS from '../assets/icons/css.png'
import iconJavascript from '../assets/icons/javascript.png'
import iconTypescript from '../assets/icons/typescript.svg'
import iconGolang from '../assets/icons/golang.png'
import iconFlutter from '../assets/icons/flutter.png'

type Props = {}

function Skills({}: Props) {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      iconUrl: iconHTML,
      proficiency: '90%',
      directionLeft: true,
    },
    {
      id: 2,
      name: 'CSS',
      iconUrl: iconCSS,
      proficiency: '90%',
      directionLeft: true,
    },
    {
      id: 3,
      name: 'Javascript',
      iconUrl: iconJavascript,
      proficiency: '90%',
      directionLeft: true,
    },
    {
      id: 4,
      name: 'Typescript',
      iconUrl: iconTypescript,
      proficiency: '80%',
      directionLeft: true,
    },
    {
      id: 5,
      name: 'Golang',
      iconUrl: iconGolang,
      proficiency: '70%',
      directionLeft: true,
    },
    {
      id: 6,
      name: 'React.js',
      iconUrl: iconReactjs,
      proficiency: '90%',
      directionLeft: false,
    },
    {
      id: 7,
      name: 'Vue.js',
      iconUrl: iconVuejs,
      proficiency: '90%',
      directionLeft: false,
    },
    {
      id: 8,
      name: 'jQuery',
      iconUrl: iconJQuery,
      proficiency: '75%',
      directionLeft: false,
    },
    {
      id: 9,
      name: 'Flutter',
      iconUrl: iconFlutter,
      proficiency: '70%',
      directionLeft: false,
    },
    {
      id: 8,
      name: 'Git',
      iconUrl: iconGit,
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

      <div className="mt-8 md:grid md:grid-cols-5 md:gap-5">
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
