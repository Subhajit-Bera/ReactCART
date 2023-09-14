import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
    {
        cartItems: [],
        subTotal: 0,
        shipping: 0,
        tax: 0,
        total: 0,
    },
    {
        addToCart:(state,action) =>{ //Home page's add o cart item
            const item=action.payload; //action.payload is a options(object) which is send from addToCartHandler(Home.jsx) 

            //Here we are checking if the item is already present in the cart or not, if present then only we increse it's quantity rather then diplaying the item on the cart again
            const isItemExist= state.cartItems.find(i=>i.id===item.id); 

            if(isItemExist){ //This is also works for increment  and increment will only work if the item is exist on cart
                state.cartItems.forEach(i=>{
                    if(i.id===item.id){
                        i.quantity+=1;
                        
                    }
                   
                })
            }else{
                state.cartItems.push(item);
            }


        },

        decrement:(state,action) =>{
            const item=state.cartItems.find(i=>i.id===action.payload)  //we are only sending id 
            if(item.quantity>1){
                state.cartItems.forEach(i=>{
                    if(i.id===item.id){
                        i.quantity-=1;
                    }
                })
            }
        },

        deleteFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(i=>i.id !== action.payload); //It will filter and add all the items which id is not matching with the deleted id
        },

        calculatePrice: (state) => {
            let sum = 0;
            state.cartItems.forEach((i) => (sum += i.price * i.quantity));
            state.subTotal = sum;
            if(state.cartItems.length!=0){
                state.shipping = state.subTotal > 1000 ? 0 : 200;
              }else{
                state.shipping=0;
              }
            state.tax = +(state.subTotal * 0.18).toFixed(); //.toFixed() return string so we added + before it, now it will return number instead of string
            state.total = state.subTotal + state.tax + state.shipping;
        },



    }
);