import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <NavBar/>
    {/* <Nav/> */}
  <Component {...pageProps} />   
  <Footer/></>)
}
