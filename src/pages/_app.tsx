import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

import Image from 'next/image';
import { HOBBIES } from '../components/HobbyList/assets';

const ImagePreloader = () => {
  return (
    <div style={{ display: 'none' }}>
      {Object.values(HOBBIES).flat().map((hobby, index) => (
        <Image
          key={`preload-${index}`}
          src={hobby.img}
          alt=""
          width={1}
          height={1}
          priority={true}
        />
      ))}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <ImagePreloader />
    </ThemeProvider>
  );
}

export default MyApp;
