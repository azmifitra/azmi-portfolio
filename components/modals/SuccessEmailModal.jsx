import React from 'react'
import { XMarkIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

function SuccessEmailModal({ setSuccessSentEmail }) {
  return (
    <div className="modalbgdefault">
      <div className="modaldefault w-11/12 py-7 px-6 text-gray-600 md:w-1/3">
        <XMarkIcon
          className="absolute top-2 right-2 h-10 w-10 cursor-pointer p-2 text-[#047857] hover:opacity-75"
          onClick={() => setSuccessSentEmail(false)}
        />
        <CheckBadgeIcon className="mb-3 h-16 w-24 text-[#047857]" />
        <h3 className="mb-6 text-center text-lg">
          Thanks for contacting me. <br /> I will check my email as soon as possible.
        </h3>
      </div>
    </div>
  )
}

export default SuccessEmailModal
