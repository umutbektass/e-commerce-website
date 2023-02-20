import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getProduct } from '../redux/productSlice/productSlice'

import '../style.css'

export default function ProductList() {
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProduct())
    },[])
    
    const filters = useSelector(state=>state.product.filters)
    
    return (
  <div>
    
      <div className="row">
        
      
        {
         
         filters.map(item=>(
            
            <div className="col-xs-4 col-sm-6 col-md-4 col-lg-3 my-2">
              <Link to={`/product/${item.id}`} style={{textDecoration:"none"}}>
              <div class="card text-dark" style={{width:"11rem",height:"19rem"}}>
          <img src={item.thumbnail} class="card-img p-3" alt="..." style={{height:"9rem"}}></img>
          <div class="card-body">
    <p class="card-title fs-14 text"><span className="fw-semibold">{item.title} </span>{item.description.substr(0,27)}</p>
    
    <p class="card-text price fw-bold">{item.price} TL</p>
    
    
          </div>
          </div>
           </Link>
            </div>
            
          ))
        }
       
       </div>
      </div>
    )
  }