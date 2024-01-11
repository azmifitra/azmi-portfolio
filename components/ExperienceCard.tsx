import React from 'react'
import { motion } from 'framer-motion'

type experienceProps = {
  experience: {
    id: number
    jobName: string
    company: string
    startDate: string
    endDate: string
    techStacks: {
      id: number
      title: string
      iconUrl: string
    }[]
    jobDesc: {
      id: number
      desc: string
    }[]
  }
}

const ExperienceCard = (props: experienceProps) => {
  return (
    <article className="flex w-[500px] snap-center flex-col items-center space-y-5 rounded-lg border border-[#047857]/50 bg-[#292929] p-10 md:w-[600px] md:flex-shrink-0 md:space-y-7 xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-36 xl:w-36"
        src="data:image/png;base64,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"
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light md:text-3xl">{props.experience.jobName}</h4>
        <p className="mt-1 text-xl font-bold md:text-2xl">{props.experience.company}</p>
        <div className="my-2 flex space-x-2">
          {props.experience.techStacks.map((item) => (
            <img
              key={item.id}
              className="h-8 w-8 rounded-full"
              src={item.iconUrl}
              alt={`icon-${item.title}`}
              title={item.title}
            />
          ))}
        </div>
        <p className="py-2 uppercase text-gray-300 md:py-5">
          {props.experience.startDate} - {props.experience.endDate}
        </p>
        <ul className="ml-5 list-disc space-y-1 text-base md:space-y-2 md:text-lg">
          {props.experience.jobDesc.map((item) => (
            <li key={item.id}>{item.desc}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
