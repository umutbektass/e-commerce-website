import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getProduct =createAsyncThunk("getProduct",async()=>{
    const res = await axios("https://dummyjson.com/products")
    return res.data.products
})



 


export const productSlice = createSlice({
    name:"product",
    initialState:{
        items:[],
        filters:[],
        filter:"All",
    },
    reducers:{
        categoriesFilters:(state,action)=>{
            state.filter = action.payload
            
            if(state.filter=="smartphones"){
             state.filters= state.items.filter(u=>u.category=="smartphones")
            }
            else if(state.filter=="laptops"){
                state.filters= state.items.filter(u=>u.category=="laptops")
               }
               else if(state.filter=="fragrances"){
                state.filters= state.items.filter(u=>u.category=="fragrances")
               }
               else if(state.filter=="skincare"){
                state.filters= state.items.filter(u=>u.category=="skincare")
               }
               else if(state.filter=="groceries"){
                state.filters= state.items.filter(u=>u.category=="groceries")
               }
               else if(state.filter=="home-decoration"){
                state.filters= state.items.filter(u=>u.category=="home-decoration")
               }
               

        }
    },
    extraReducers:{
       [getProduct.fulfilled]:(state,action)=>{
        state.items=action.payload;
        state.filters=state.items
       }
        },
    }
)

export const {categoriesFilters} = productSlice.actions;
export default productSlice.reducer;