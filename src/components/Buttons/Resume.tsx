import Link from 'next/link'
import React from 'react'

import TextButton from './TextButton'

interface Props {
  children?: React.ReactNode
}

const Resume: React.FC<Props> = ({children, ...rest}) => {
  return (
    <Link href='/Abbas_Reeves.pdf'> 
      <TextButton>
        RESUME
      </TextButton>
    </Link>
  )
}

export default Resume