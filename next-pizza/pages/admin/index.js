import styles from '../../styles/Admin.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';

const index = ({orders, products}) =>{

    const [productList, setProductList] = useState(products);
    const [orderList, setOrderList]= useState(orders);

    const handleDelete = async (id)=>{

        try{
            const res = await axios.delete('http://localhost:3000/api/products/'+id);
            setProductList(productList.filter(product=>product._id!==id));
        }catch(err){
            alert(err)
        }


    }

    return (
        <div className={styles.container}>
              <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>

                        { productList.map((product)=>(
                            
                            <tbody key={product._id}>
                                <tr className={styles.trTitle}>
                                    <td>
                                        <Image src={product.img} width={50} height={50} objectFit="cover"/>
                                    </td>
                                    <td>{product._id.slice(0,5)}...</td>
                                    <td>{product.title}</td>
                                    <td>${product.prices[0]}</td>
                                    <td className={styles.td}>
                                        <button className={styles.button}>Edit</button>
                                        <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>

                        ))}

                </table>
             </div>
             <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    
                    {
                        orderList.map(order=>(
                            <tbody key={order._id}>
                                <tr className={styles.tdTitle}>
                                    <td>
                                    {order._id.slice(0,5)}... 
                                    </td>
                                    <td>{order.Customer}</td>
                                    <td>${order.total}</td>
                                    <td>Card</td>
                                    <td>Paid</td>
                                    <td>Praparing</td> 
                                    <td>
                                        <button className={styles.next}>Next Stage</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }



                </table>
             </div>
        </div>
    )



}

export const getServerSideProps = async ()=>{

    console.log("----->")

    
    const productsUrl = "http://localhost:3000/api/products";
    const ordersUrl = "http://localhost:3000/api/orders";

    const productRes = await axios.get(productsUrl);
    const ordersRes = await axios.get(ordersUrl);

    console.log("----->")
    console.log(ordersRes)

    return {
        props: {
            orders: ordersRes.data,
            products: productRes.data.products
        }
    }


}


export default index 