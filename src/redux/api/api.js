import axios from "axios";
export const getProduct=async()=>{
    const res= await axios("https://dummyjson.com/products")
    return res.data;
}