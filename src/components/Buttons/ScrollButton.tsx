import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';
import IconButton from './IconButton';

const ScrollButton = () => {

  const [isVisible, setisVisible] = useState(false);

  const styles = useSpring({ opacity: isVisible ? 1 : 0})

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setisVisible(true)
    }
    else {
      setisVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <animated.div
    style={styles}>
      <IconButton Icon={BsFillArrowUpCircleFill} size={60} addStyle='fixed sm:bottom-[50px] sm:right-[25px] bottom-[25px] right-5'
        onClick={scrollToTop}
      >
      </IconButton>
  </animated.div>
  )
}

export default ScrollButton