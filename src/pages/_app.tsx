import { AppProps } from 'next/app';
import '../styles/globals.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
