import styles from '../../styles/Admin.module.css';
import Image from 'next/image';

const index = () =>{

    return (
        <div className={styles.container}>
              <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={styles.tdTitle}>
                            <td>
                                <Image src="/img/pizza.png" width={50} height={50} objectFit="cover"/>
                            </td>
                            <td>PizzaTitle</td>
                            <td>$50</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button}>Delete</button>
                            </td>
                        </tr>
                    </tbody>


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
                    <tbody>
                        <tr className={styles.tdTitle}>
                            <td>
                               {"45345345344r34t3t3434t".slice(0,5)}... 
                            </td>
                            <td>John Doe</td>
                            <td>$50</td>
                            <td>Card</td>
                            <td>Paid</td>
                            <td>Praparing</td> 
                            <td>
                                <button className={styles.next}>Next Stage</button>
                            </td>
                        </tr>
                    </tbody>


                </table>
             </div>
        </div>
    )



}


export default index 