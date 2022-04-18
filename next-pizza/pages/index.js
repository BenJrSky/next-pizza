import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza restaurant in Cagliari</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1>home page</h1>
      <Image width="40px" height="40px" src="/img/logo.png" />



    </div>
  )
}
