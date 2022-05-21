import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='application-name' content='reevesabbas.com'/>
        <meta name='author' content='Reeves Abbas | Full Stack Developer'/>
        <meta name='description' content='Reeves Abbas is a Full-Stack Software Engineer that works with
        numerous frameworks and languages such as- JS, CSS, HTML5 and React. Click to learn more.' />
      </head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
