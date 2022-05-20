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
          <IconButton Icon={GrTwitter} size={45}>
          </IconButton>
        </a>
        <a
        href='https://github.com/reevesabbas'
        target='_blank'
        rel='noopener noreferrer'
        >
          <IconButton Icon={GrGithub} size={48}>
          </IconButton>
        </a>
        <a
        href='https://www.instagram.com/reeves.19/'
        target='_blank'
        rel='noopener noreferrer'
        >
          <IconButton Icon={GrInstagram} size={45}>
          </IconButton>
        </a>
      </div>
      
  )
}

export default SocialButtons