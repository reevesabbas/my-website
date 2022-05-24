import React from 'react'
import FormBtn from './FormBtn'

const ContactForm = () => {

  return (
    <form method='POST' action='https://getform.io/f/af679d38-c262-47ee-b94f-1ce4f93b7611' className='flex flex-col pt-7 space-y-5 drop-shadow-md'>
      <input name='Name' placeholder='Name'/>
      <input name='Email' placeholder='Email'/>
      <input name='Subject' placeholder='Subject'/>
      <textarea name='Message' placeholder='Message'/>
      <FormBtn>
        SEND
      </FormBtn>
  </form>
  )
}

export default ContactForm