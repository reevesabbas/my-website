import React from 'react'
import FormBtn from './FormBtn'

const ContactForm = () => {

  return (
    <form 
      method='POST' 
      action='https://app.headlessforms.cloud/api/v1/form-submission/l49D1dmrVN' 
      className='flex flex-col pt-7 space-y-5 drop-shadow-md'
    >
      <input name='Name' placeholder='Name' required />
      <input name='Email' placeholder='Email' required />
      <input name='Subject' placeholder='Subject' required />
      <textarea name='Message' placeholder='Message' required />
      <FormBtn>
        SEND
      </FormBtn>
  </form>
  )
}

export default ContactForm