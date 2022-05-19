import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import PizzaList from './components/PizzaLista';
import Slider from './components/Slider';

export default function Home({pizzaList}) {
  return (
    <div>
      <Head>
        <title>Pizza restaurant in Cagliari</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const getServerSideProps = async ()=>{

  const url = "http://localhost:3000/api/products";
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const request = await axios.get(url);

  console.log(request)

  const response = request ? await request.data : [];

  return {
    props:{
      pizzaList: response.products
    }
  }

}
