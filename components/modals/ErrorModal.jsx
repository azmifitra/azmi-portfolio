import React from 'react'
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'

function ErrorModal({ setErrorSentEmail }) {
  return (
    <div className="modalbgdefault">
      <div className="modaldefault w-11/12 py-7 px-6 text-gray-600 md:w-1/3">
        <XMarkIcon
          className="absolute top-2 right-2 h-10 w-10 cursor-pointer p-2 text-red-500 hover:opacity-75"
          onClick={() => setErrorSentEmail(false)}
        />
        <ExclamationTriangleIcon className="mb-3 h-16 w-24 text-red-500" />
        <h3 className="mb-6 text-center text-lg">Oops... Something went wrong!</h3>
      </div>
    </div>
  )
}

export default ErrorModal
