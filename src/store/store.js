import productReducer from '../redux/productSlice/productSlice'
import userReducer from '../redux/userSlice/userSlice'
import basketReducer from '../redux/basketSlice/basketSlice'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer:{
    product:productReducer,
    user:userReducer,
    basket:basketReducer
}
})

export default store;