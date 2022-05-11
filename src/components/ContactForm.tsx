import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  return (
    <form className='flex flex-col pt-7 space-y-5'>
      <input placeholder='Name'/>
      <input placeholder='Email'/>
      <input placeholder='Subject'/>
      <textarea placeholder='Message'/>
      <button className='mx-auto font-fjalla text-3xl text-darkestPurple dark:text-white hover:scale-105 active:translate-y-0.5 ease-in-out duration-150
        hover:bg-blue hover:border-blue dark:hover:bg-darkOrange dark:hover:border-darkOrange dark:hover:text-shadow-none drop-shadow-lg text-shadow dark:text-shadow-dark
        hover:text-shadow-none active:text-shadow-none dark:active:text-shadow-none border-2 py-2 px-6 dark:active:bg-darkerOrange dark:active:border-darkerOrange rounded-sm active:bg-darkBlue active:border-darkerBlue'>
        SEND
      </button>
  </form>
  )
}

export default ContactForm