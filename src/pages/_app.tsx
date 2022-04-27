import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='bg-lightestPurple dark:bg-darkestPurple min-h-[2000px]'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
