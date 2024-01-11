import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper'

import imgAndalinComproProject from '../assets/images/projects/andalin-project.png'
import imgAndalinCareerProject from '../assets/images/projects/andalin-career-project.png'
import imgAndalinTradedeskProject from '../assets/images/projects/andalin-tradedesk-project.png'
import imgRePathProject from '../assets/images/projects/rePath-project.png'

type Props = {}

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: 'Company Profile - Andalin',
      desc: `A website that provides detailed information about Andalin company. It includes information about the mission statement, products and services, and contact information. The website's design is built with a clean and modern layout, and the use of appropriate images and graphics to help convey the company's message and brand.`,
      techStack: 'NuxtJS, Tailwind, Axios.',
      img: imgAndalinComproProject,
      urlWebsite: 'https://www.andalin.com/',
    },
    {
      id: 2,
      title: 'Career Page - Andalin',
      desc: `Andalin career page is a section in the Andalin’s company website that provides information about job opportunities within the company. It includes information about current job openings, job descriptions, qualifications, and application instructions. Also, include information about the company's culture, benefits, and the recruitment process. The website's purpose is to attract potential employees, provide information about the company's culture and working conditions, and make the application process as easy as possible.`,
      techStack: 'NuxtJS, Tailwind, Axios, Strapi, SwiperJS.',
      img: imgAndalinCareerProject,
      urlWebsite: 'https://devandalin.andalin.com/career',
    },
    {
      id: 3,
      title: 'Tradedesk - Andalin',
      desc: `Andalin Trade is a platform that connects B2B buyer and supplier with end-to-end services in one platform. The services of this product are direct trading, online quotation, logistics, financing, and insurance.`,
      techStack: 'NuxtJS, Tailwind, Axios, Socket.io.',
      img: imgAndalinTradedeskProject,
      urlWebsite: 'https://trade.andalin.com/',
    },
    {
      id: 4,
      title: 'rePath - Social Media',
      desc: `A social media web mobile application featuring location and activity sharing between users. Main features include 
      sharing location, sharing music you’re listening to, and posting your memorable photograph. Users can follow each 
      other, view their activity, and interact by giving likes and comments.`,
      techStack: 'ReactJS, Redux, Bootstrap, MongoDB, Mongoose.',
      img: imgRePathProject,
      urlWebsite: 'https://www.youtube.com/watch?v=LgXPLYV21jI&t=5s',
    },
  ]
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: 1.5 }}
      className="relative flex h-screen flex-col justify-center text-left"
    >
      <h3 className="mb-4 text-center text-2xl uppercase tracking-[20px] text-gray-500 md:mb-8">Projects</h3>

      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
          delay: 5000,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        slidesPerView={1}
        className="mySwiper w-screen max-w-screen-xl"
      >
        {projects.map((project) => (
          <SwiperSlide className="flex flex-col items-center justify-center" key={project.id}>
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image src={project.img} className="mt-8 h-40 w-auto md:h-64" alt="project-img" />
            </motion.div>
            <div className="mt-5 flex flex-col justify-center space-y-1 px-4">
              <a
                href={project.urlWebsite}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer px-10 text-center text-2xl font-semibold hover:animate-pulse hover:underline hover:decoration-[#047857] md:text-4xl lg:mb-6"
              >
                {project.title}
              </a>
              <p className="text-center text-base md:px-24 md:text-left md:text-lg">{project.desc}</p>
              <p className="text-center text-sm text-gray-300 md:px-24 md:text-left md:text-base">
                Tech stack: {project.techStack}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#047857]/20"></div>
    </motion.div>
  )
}

export default Projects
