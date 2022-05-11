
import styles from '../styles/Cart.module.css';
import Image from 'next/image';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice';

const Cart = ()=> {

    const cart = useSelector(state=>state.cart);

    const [open, setOpen] = useState(false);

    const amount  = cart.total;
    const currency = "USD";
    const style = {'layout':'vertical'};

    const dispatch = useDispatch();
    const router = useRouter();

    const createOrder = async (data)=>{
        try{

            const url = "http://localhost:3000/api/orders";
            const options = {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(data)
            }
          
            const request = await fetch(url,options);
            const response = await request.json();

            if(request.status===201){
                router.push('/orders/'+response._id)
                await dispatch(reset());
            }
            

        }catch(err){
            console.log(err)
        }

    }

    const ButtonWrapper = ({ currency, showSpinner }) => {

        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
       
        return (<>

                { (showSpinner && isPending) && <div className="spinner" /> }

                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={ function(data, actions) {
                        return actions.order.capture().then(function (details) {

                            const shipping = details.purchase_units[0].shipping;

                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total:cart.total,
                                method:1,
                            })



                        });
                    }}
                />
            </>
        );
    }

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                    <th className={styles.td}>Product</th>
                        <th className={styles.td}>Product</th>
                        <th className={styles.td}>Name</th>
                        <th className={styles.td}>Extras</th>
                        <th className={styles.td}>Price</th>
                        <th className={styles.td}>Quantity</th>
                        <th className={styles.td}>Total</th>
                    </tr>

                    {cart.products.map(product=>(

                        <tr className={styles.tr} key={product._id}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src={product.img} layout='fill' objectFit='cover'/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>{product.title}</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    {product.extrass.map(extra=>(
                                        <span key={extra._id}> {extra.text}, </span>
                                    ))}
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>${product.price}</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>{product.quantity}</span>
                            </td>
                            <td>
                                <span className={styles.total}>${product.price * product.quantity}</span>
                            </td>
                        </tr>

                    ))}

                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>${cart.total}
                    </div>
                    
                    {open ? (
                        <div className={styles.paymentMethods}>
                            <button className={styles.payButton}>CASH ON DELIVERY</button>
                            <PayPalScriptProvider
                                options={{
                                    "client-id": "AZ11ISZcZHj37AMIlbCD1AqFqMsdbcex_QJ_hAWE_2OZacxRWA-86wj6LxFFxsZtVOaYyU76_E51gXuI",
                                    components: "buttons",
                                    currency: "USD",
                                    "disable-funding": "card,credit,p24,sofort,mybank"
                                }}>
                                <ButtonWrapper
                                    currency={currency}
                                    showSpinner={false}
                                />
                            </PayPalScriptProvider>
                        </div>
                    ) : (
                        <button className={styles.button} onClick={()=>setOpen(true)}>CHECKOUT NOW!</button>
                    )}

                </div>
            </div>

        </div>
    )

}



export default Cart