import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total:0,
    },
    reducers:{
        addProduct: (state, action)=>{
            state.products.push({...action.payload, cartId: Date.now()});
            state.total += action.payload.price * action.payload.quantity;
            state.quantity += 1;
        },
        deleteProduct: (state, action)=>{

            let {products, total, quantity} = state;

            products = state.products.filter(product=>{
                if(product.cartId!==action.payload){
                    return product
                }
            });

            quantity = state.products.reduce((acc,product)=>{
                if(product.cartId!==action.payload){
                    acc += 1;
                }
                return acc
            },0);

            total = state.products.reduce((acc,product)=>{
                if(product.cartId!==action.payload){
                    acc += product.price * product.quantity;
                }
                return acc
            },0);

            return {
                ...state, 
                total: total,
                quantity: quantity,
                products: products
            };
        },
        reset: (state)=>{
            state.products = [];
            state.total = 0;
            state.quantity = 0;
        }
    }

});

export const { addProduct, reset, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;