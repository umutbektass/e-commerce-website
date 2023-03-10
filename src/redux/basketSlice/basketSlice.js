import { createSlice } from "@reduxjs/toolkit";
export const basketSlice = createSlice({
    name:"basket",
    initialState:{
       basket:[]
    },
    reducers:{
        addToBasket:(state,action)=>{
            const products = action.payload;
            const checkProducts = state.basket.find(item=>item.product.id===products.id)
            if(checkProducts){
              checkProducts.amount++;
                state.basket=[...state.basket.filter(item=>item.product.id!==products.id),checkProducts ]

            }
            else{
                state.basket = [...state.basket,{amount:1,product:products}]
            }
           console.log(state.basket)
       
    },
    incrementBasket:(state,action)=>{
        const products = action.payload;
        const checkProducts = state.basket.find(item=>item.product.id===products.product.id)
        checkProducts.amount++;
        state.basket=[...state.basket.filter(item=>item.product.id!==products.product.id),checkProducts]


    },
    descrementBasket:(state,action)=>{
        const products = action.payload;
        const checkProducts = state.basket.find(item=>item.product.id===products.product.id)
        checkProducts.amount--;
        if(checkProducts.amount==0)
        {
            state.basket=state.basket.filter(item=>item.product.id!==products.product.id)
        }
        else{
        state.basket=[...state.basket.filter(item=>item.product.id!==products.product.id),checkProducts]}



    }
}
}
)
export const basket  = state=>state.basket.basket;

export const {addToBasket,incrementBasket,descrementBasket} = basketSlice.actions;
export default basketSlice.reducer;