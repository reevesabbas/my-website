import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='bg-white dark:bg-darkestPurple'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
