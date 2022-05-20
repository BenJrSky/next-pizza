
import styles from '../../styles/AddPizza.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddPizza = ({state})=>{

    const handleClose = ()=>{
        state(false);
    }

    const handleClick = ()=>{
        
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <button className={styles.close} onClick={handleClose}>X</button>

                <h1 className={styles.title}>Add a New Pizza</h1>
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


export default AddPizza