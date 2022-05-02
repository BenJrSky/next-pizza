import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = ({pizza})=>{

    const [size, setSize] = useState(0);

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img}  objectFit="contain" layout='fill' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>${pizza.prices[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src='/img/size.png' layout="fill" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src='/img/size.png' layout="fill" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src='/img/size.png' layout="fill" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.chhose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="dooble" name="double"/>
                        <label htmlFor="double">Double ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="cheese" name="cheese"/>
                        <label htmlFor="cheese">Extra cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="spicy" name="spicy"/>
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="garlic" name="garlic"/>
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input className={styles.quantity} type="number" defaultValue={1}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )

}

export const getServerSideProps = async ({params})=>{

    const url = `http://localhost:3000/api/products/${params.id}`;
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  
    const request = await fetch(url,options);
    const response = await request.json();
  
    console.log(response)
  
    return {
      props:{
        pizza: response.product
      }
    }
  
}

export default Product
