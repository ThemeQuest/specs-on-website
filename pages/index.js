import Head from 'next/head'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Footer from './components/footer';

export default function Home() {

  return (
    <>
      <Head>
          <title>SpecsOn</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Banner/>  
        Content
      <Footer />
    </>
  )
}
