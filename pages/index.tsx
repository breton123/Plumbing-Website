import type { NextPage } from 'next'
import Head from 'next/Head'
import Header from "../components/Header"
import Intro from "../components/Intro"
import Services from "../components/Services"
import Slogan from "../components/Slogan"
import About from "../components/About"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className='font-main'>
      <Head>
        <title>Prime Plumbing</title>
      </Head>
      <Intro />
      <Services />
      <Slogan />
      <About />
      <Footer />
      <Header />
    </div>
  )
}

export default Home
