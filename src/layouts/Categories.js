import React from 'react'
import { Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { categoriesFilters } from '../redux/productSlice/productSlice';

export default function Categories() {
  const dispatch = useDispatch()
  let products = useSelector(state=>state.product.items)
  let produstCategoris = []
 
  
products.map((item)=>(
  produstCategoris.push(item.category)
))

let uniqueChars = [...new Set(produstCategoris)];

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
  <Link to="/register">
  <button className="btn btn-primary">Register</button></Link>
  <Link to="/login">
  <button className="btn btn-primary">Login</button></Link>
    </div>
  )
}
