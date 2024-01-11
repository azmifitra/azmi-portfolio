import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'

import avatarPic from '../assets/images/azmi-solo.jpg'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, My name is Azmi Fitra', 'A guy who loves to <code />', 'Welcome to my Portfolio Website'],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image src={avatarPic} alt="azmi-avatar" className="relative mx-auto h-32 w-32 rounded-full object-cover" />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">Frontend Developer</h2>
        <h1 className="px-10 text-3xl font-semibold lg:text-5xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#047857" />
        </h1>

        <div className="mt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
