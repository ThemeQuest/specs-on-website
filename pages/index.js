import Head from 'next/head'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Footer from './components/footer';
import Featured from './components/Featured';

export default function Home() {

  return (
    <>
      <Head>
          <title>SpecsOn</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Banner/>
      <Featured/>
      <Footer />
    </>
  )
}
