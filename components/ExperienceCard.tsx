import React from 'react'
import { motion } from 'framer-motion'

type experienceProps = {
  experience: {
    id: number
    jobName: string
    company: string
    startDate: string
    endDate: string
    image: string
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
    <article className="mb-5 flex w-[500px] snap-center flex-col items-center space-y-5 rounded-lg border border-[#047857]/50 bg-[#292929] p-10 md:w-[600px] md:flex-shrink-0 md:space-y-7 xl:w-[900px]">
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
        src={props.experience.image}
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light md:text-3xl">{props.experience.jobName}</h4>
        <p className="mt-1 text-xl font-bold md:text-2xl">{props.experience.company}</p>
        <div className="my-2 flex space-x-2">
          {props.experience.techStacks.map((item) => (
            <div className="group relative">
              <img
                key={item.id}
                className="h-8 w-8 cursor-pointer rounded-full"
                src={item.iconUrl}
                alt={`icon-${item.title}`}
              />
              <div className="invisible absolute top-9 z-50 rounded border-2 border-[#047857]/50 bg-[rgb(36,36,36)] p-1 text-white shadow-lg group-hover:visible">
                {item.title}
              </div>
            </div>
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
