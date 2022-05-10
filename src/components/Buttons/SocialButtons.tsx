import React from 'react'
import { GrGithub, GrInstagram, GrTwitter } from 'react-icons/gr'
import IconButton from './IconButton'

const SocialButtons = () => {
  return (
    <div className='flex flex-row md:justify-start justify-center space-x-9'>
        <a
        href='https://twitter.com/reevfs'
        target='_blank'
        rel='noopener noreferrer'>
          <IconButton icon={GrTwitter} >
            <GrTwitter size={45}/> 
          </IconButton>
        </a>
        <a
        href='https://github.com/reevesabbas'
        target='_blank'>
          <IconButton icon={GrGithub}>
            <GrGithub size={47} />
          </IconButton>
        </a>
        <a
        href='https://www.instagram.com/reeves.19/'
        target='_blank'>
          <IconButton icon={GrInstagram}>
            <GrInstagram size={45} />
          </IconButton>
        </a>
      </div>
      
  )
}

export default SocialButtons