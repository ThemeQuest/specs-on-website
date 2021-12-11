import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>SpecsOn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Main content
      <footer className="flex items-center justify-center w-full h-24 border-t">
        Footer
      </footer>
    </div>
  )
}
