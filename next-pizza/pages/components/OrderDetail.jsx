import styles from '../../styles/OrderDetails.module.css';
import { useState } from 'react';


const OrderDetail = ({total, createOrder,state})=>{

    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = ()=>{
        createOrder({customer,address,total, method:0 })
    }

    const handleClose = ()=>{
        state(false);
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <button className={styles.close} onClick={handleClose}>X</button>

                <h1 className={styles.title}>You willp pay $12 after delivery</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name Surname</label>
                    <input placeholder="John Doe" type="text" className={styles.input} onChange={(e)=>setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <input placeholder="Stree 50" type="text" className={styles.input} onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Phone number</label>
                    <input placeholder="+39 352 34 565" type="phone" className={styles.input} onChange={(e)=>setPhone(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
            </div>
        </div>
    )
}



export default OrderDetail