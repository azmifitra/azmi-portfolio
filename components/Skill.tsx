import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  skill: {
    id?: number
    name?: string
    iconUrl: string
    proficiency?: string
    directionLeft: boolean
  }
}

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        layout
        initial={{
          x: skill.directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={skill.iconUrl}
          className="inline-block h-16 w-16 rounded-md object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
          alt={`icon-${skill.name}`}
        />
      </motion.div>
      <div
        className="absolute z-0 h-16 w-16 rounded-md opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32"
        title={skill.name}
      >
        <div className="flex h-full items-center justify-center">
          <p className="text-xl font-bold text-black opacity-100 md:text-3xl">{skill.proficiency}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
