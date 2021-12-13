import Head from 'next/head'
import Navbar from './components/Navbar'
import Banner from './components/Banner';

export default function Home() {

  return (
    <>
      <Head>
          <title>SpecsOn</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Banner/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        
        Content
        <footer className="flex items-center justify-center w-full h-24 border-t">
          Footer
        </footer>
      </div>
    </>
  )
}
