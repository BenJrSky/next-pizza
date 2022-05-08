import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../redux/cartSlice";

const Product = ({pizza})=>{

    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza.prices[0]);
    const [extrass, setExtrass] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();


    const changePrice = (number)=>{
        setPrice(price+number);
    }

    const handleSize = (sizeIndex)=>{
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const handleChange = (event, option)=>{

        const checked = event.target.checked;

        if(checked){
            changePrice(option.price);
            setExtrass(prev=>[...prev, option]);
        }else{
            changePrice(-option.price);
            setExtrass(extrass.filter(extra=>extra._id!==option._id));
        }

    };

    const handleClick = ()=>{

        dispatch(addProduct({...pizza, price, extrass, quantity }));

    }

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img}  objectFit="contain" layout='fill' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>${price}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>handleSize(0)}>
                        <Image src='/img/size.png' layout="fill" />
                        <span className={styles.number}>Small</span>
                    { size==0 && (<div className={styles.check}> <Image src='/img/check.png' layout="fill" /></div>) }
                    </div>
                    <div className={styles.size} onClick={()=>handleSize(1)}>
                        <Image src='/img/size.png' layout="fill" />
                        <span className={styles.number}>Medium</span>
                    { size==1 && (<div className={styles.check}> <Image src='/img/check.png' layout="fill" /></div>) }
                    </div>
                    <div className={styles.size} onClick={()=>handleSize(2)}>
                        <Image src='/img/size.png' layout="fill" />
                        <span className={styles.number}>Large</span>
                    { size==2 && (<div className={styles.check}> <Image src='/img/check.png' layout="fill" /></div>) }
                    </div>
                </div>
                <h3 className={styles.chhose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    {pizza.extraOptions.map(option=>(
                        <div className={styles.option} key={option._id}>
                            <input className={styles.checkbox} type="checkbox" id={option._id} name={option.text} onChange={(e)=>handleChange(e,option)}/>
                            <label htmlFor={option._id}>{option.text}</label>
                        </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input className={styles.quantity} type="number" defaultValue={1} onChange={(e)=>setQuantity(e.target.value)}/>
                    <button className={styles.button} onClick={handleClick} >Add to Cart</button>
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
