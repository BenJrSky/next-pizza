
import Image from 'next/image';
import styles from '../../styles/PizzaCard.module.css';
import Link from 'next/link';

const PizzaCard = ({pizza})=>{



    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza && pizza._id}`}>
                <Image src={pizza && pizza.img} width='500' height='500' />
            </Link>
            <h1 className={styles.title}>{pizza && pizza.title}</h1>
            <span className={styles.price}>${pizza && pizza.prices[0]}</span>
            <p className={styles.desc}>{pizza && pizza.desc}</p>
        </div>
    )


}



export default PizzaCard