import { useState } from 'react';
import styles from '../../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';
import AddPizza from './AddPizza';

const PizzaList = ({pizzaList,isAdmin})=>{

    const [openModal, setOpenModal] = useState(false);


    const handleAdd = ()=>{
        setOpenModal(true);
    }

    return (
        <div className={styles.container}>

            {isAdmin && ( <button className={styles.add} onClick={handleAdd}>Add New Pizza</button>)}

            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique reprehenderit iure. Eum, tenetur alias excepturi ratione laboriosam provident perferendis, nihil eaque fugit placeat corrupti ea ab nostrum at libero?
            </p>
            <div className={styles.wrapper}>
                {pizzaList && pizzaList.map(pizza=>(
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}
            </div>

            {openModal && (<AddPizza state={setOpenModal}/>)}

        </div>

    )


}


export default PizzaList;


