import Head from 'next/head'
import Image from 'next/image'
import PizzaList from './components/PizzaLista'
import Slider from './components/Slider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza restaurant in Cagliari</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList/>
    </div>
  )
}
