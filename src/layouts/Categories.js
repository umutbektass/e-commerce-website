import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { categoriesFilters } from '../redux/productSlice/productSlice';
import { Rating } from 'react-simple-star-rating'


export default function Categories() {
  const dispatch = useDispatch()
  let products = useSelector(state=>state.product.items)
  let produstCategoris = []
  
products.map((item)=>(
  produstCategoris.push(item.category)
))

let uniqueChars = [...new Set(produstCategoris)];
let rating = 2.6

  return (
    <div>
      <ul className="list-group my-2">
      {
        uniqueChars.map(item=>(
          
        <li className="list-group-item fw-light">
          <a role="button" onClick={()=>dispatch(categoriesFilters(item))}>{item.toUpperCase()}
           </a> </li>
          
        ))
      }
      </ul>

    </div>
  )
}
