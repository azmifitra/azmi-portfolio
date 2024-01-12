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
import imgAndalinSyncargoProject from '../assets/images/projects/andalin-syncargo.png'
import imgRePathProject from '../assets/images/projects/rePath-project.png'
import imgPuasApps from '../assets/images/projects/puas-apps.png'
import imgSastaIndoCoffee from '../assets/images/projects/sasta-indo-coffee-website.png'
import imgByUInternalProject from '../assets/images/projects/byU-internal-project.png'
import imgByUSalvoApp from '../assets/images/projects/byU-salvo-app.png'
import imgByUStrapiProject from '../assets/images/projects/byU-strapi-project.png'

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
      title: 'Syncargo - Andalin',
      desc: `Syncargo introduces a game-changing solution, equipping freight forwarders with the tools needed to thrive in the digital era. Especially, in Indonesia where freight forwarders rely on manual process to get the job done.
      With Syncargo, they can effortlessly outperform their competitors and unlock their potential. Revolutionizing their businesses and seizing new opportunities.`,
      techStack: 'NuxtJS, Tailwind, Axios, Socket.io.',
      img: imgAndalinSyncargoProject,
      urlWebsite: 'https://syncargo.com/',
    },
    {
      id: 5,
      title: 'rePath - Social Media',
      desc: `A social media web mobile application featuring location and activity sharing between users. Main features include 
      sharing location, sharing music you’re listening to, and posting your memorable photograph. Users can follow each 
      other, view their activity, and interact by giving likes and comments.`,
      techStack: 'ReactJS, Redux, Bootstrap, MongoDB, Mongoose.',
      img: imgRePathProject,
      urlWebsite: 'https://www.youtube.com/watch?v=LgXPLYV21jI&t=5s',
    },
    {
      id: 6,
      title: 'PUAS Apps',
      desc: `PT Surveyor Indonesia's Integrated Asset Management Information System which integrates all asset management business processes in accordance with the asset life cycle on mobile platform.`,
      techStack: 'Dart, Flutter, GetX, Android Studio.',
      img: imgPuasApps,
    },
    {
      id: 7,
      title: 'Sasta Indonesia Coffee Website',
      desc: `I had the privilege of contributing to the creation of the Sasta Indonesia Coffee website, a platform designed to showcase the passion and commitment of a coffee company dedicated to producing high-quality, ethically sourced coffee. In this project, I focused on crafting an engaging and user-friendly interface that reflects the brand's values and mission. Utilizing my skills in HTML, CSS, and JavaScript, I ensured a seamless and visually appealing experience for website visitors.`,
      techStack: 'Typescript, ReactJS, react-hook-form, SwiperJS.',
      img: imgSastaIndoCoffee,
      urlWebsite: 'https://www.sastaindonesiacoffee.com/',
    },
    {
      id: 8,
      title: 'by.U Internal Project',
      desc: `On my current company, by.U Telkomsel, I assigned on internal project that required the implementation of CRUD (Create, Read, Update, Delete) functionalities. Using frontend technologies and frameworks, such as Typescript and NextJS, I created a user-friendly. interface that facilitated seamless data entry, retrieval, and modification. I focused on implementing form validation, and providing a smooth user experience throughout the CRUD process.`,
      techStack: 'Typescript, Node.js, NextJS, ReactQuery, Material UI.',
      img: imgByUInternalProject,
    },
    {
      id: 9,
      title: 'by.U Salvo Apps',
      desc: `As part of my professional journey on my company, I undertook the challenging assignment of revamping an existing application originally built in PHP to Golang. This project was a critical initiative within my organization and provided me with a unique opportunity to demonstrate my expertise in modernizing legacy systems and enhancing their performance, scalability, and maintainability.`,
      techStack: 'Javascript, Node.js, ReactJS, Golang, Fiber.',
      img: imgByUSalvoApp,
    },
    {
      id: 10,
      title: 'by.U Strapi Project',
      desc: `In this project, I worked on efficient content management for a mobile apps by.U, utilizing Strapi.io, the industry-leading open-source headless CMS. Employing my proficiency in JavaScript and leveraging the Strapi API, I implemented an effective system for managing and delivering dynamic content seamlessly.`,
      techStack: 'Javascript, Strapi.io, MongoDB, MySQL.',
      img: imgByUStrapiProject,
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
