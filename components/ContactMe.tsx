import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { ThreeDots } from 'react-loader-spinner'

import SuccessEmailModal from './modals/SuccessEmailModal'
import ErrorModal from './modals/ErrorModal'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

function ContactMe({}: Props) {
  const [successSentEmail, setSuccessSentEmail] = useState(false)
  const [errorSentEmail, setErrorSentEmail] = useState(false)
  const [isLoadingEmail, setIsLoadingEmail] = useState(false)
  const { register, watch, reset, handleSubmit } = useForm<Inputs>()
  const name = watch('name', '')
  const email = watch('email', '')
  const subject = watch('subject', '')
  const message = watch('message', '')

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, subject, message }) => {
    setIsLoadingEmail(true)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        {
          name,
          email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoadingEmail(false)
          setSuccessSentEmail(true)
          reset()
          console.log('Success Sent Email!', result.text)
        },
        (error) => {
          setIsLoadingEmail(false)
          setErrorSentEmail(true)
          console.log('Error Sent Email!', error.text)
        }
      )
  }

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-4 text-center md:text-left">
      <h3 className="indent-3 text-2xl uppercase tracking-[12px] text-gray-500">Contact Me</h3>
      <div className="flex flex-col space-y-5 md:space-y-10">
        <h4 className="text-center text-xl font-semibold md:text-3xl">
          I have got just what you need.{' '}
          <span className="animate-pulse underline decoration-[#047857]">
            {' '}
            <br className="block md:hidden" /> Lets Talk.
          </span>
        </h4>
        <div className="space-y-1 md:space-y-5">
          <div className="flex items-center justify-center space-x-2 md:space-x-3">
            <DevicePhoneMobileIcon className="h-6 w-6 animate-pulse text-[#047857]" />
            <p className="text-base md:text-xl">+62-821-1528-0008</p>
          </div>

          <div className="flex items-center justify-center space-x-1 md:space-x-3">
            <EnvelopeIcon className="h-6 w-6 animate-pulse text-[#047857]" />
            <p className="text-base md:text-xl">azmifitrad@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-1 md:space-x-3">
            <MapPinIcon className="h-6 w-6 animate-pulse text-[#047857]" />
            <p className="text-base md:text-xl">Bandung, Jawa Barat, Indonesia.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-full flex-col space-y-2 px-6 md:w-fit">
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input {...register('name')} className="contactInput" type="text" placeholder="Name" autoComplete="off" />
            <input
              {...register('email')}
              className="contactInput"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            type="text"
            placeholder="Subject"
            autoComplete="off"
          />
          <textarea
            {...register('message')}
            className="contactInput scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#047857]/50"
            placeholder="Message"
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="flex h-11 flex-shrink-0 items-center justify-center rounded-md bg-[#047857] py-2 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-[#cccccc] disabled:font-normal disabled:text-[#666666] disabled:opacity-30 hover:opacity-80"
            disabled={
              !name.length || !email.length || !/\S+@\S+\.\S+/.test(email) || !subject.length || !message.length
            }
          >
            {isLoadingEmail ? (
              <ThreeDots
                height="36"
                width="36"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ justifyContent: 'center' }}
                visible={true}
              />
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
      {successSentEmail && <SuccessEmailModal setSuccessSentEmail={setSuccessSentEmail} />}
      {errorSentEmail && <ErrorModal setErrorSentEmail={setErrorSentEmail} />}
    </div>
  )
}

export default ContactMe
