import styles from './../../styles/Navbar.module.css';
import Image from 'next/image'

const Navbar = ()=>{

    return (

        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image width="32" height="32" src="/img/telephone.png"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>order now!</div>
                    <div className={styles.text}>012 345 678</div>

                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" width="160" height="70"/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contacts</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" width="30" height="30"/>
                    <div className={styles.counter}>2</div>
                </div>
            </div>

        </div>
    )

};

export default Navbar;