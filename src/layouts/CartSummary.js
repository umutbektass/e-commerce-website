import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {DropdownItem} from 'reactstrap'
import '../style.css'

export default function CartSummary() {
  const basket = useSelector(state=>state.basket.basket)
  return (
    <div className="text-white">
      <div class="dropdown">
  <a class="text-white dropdown-toggle me-4" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration:"none"}}>
    Sepetiniz
  </a>
  <ul class="dropdown-menu cartSummary">
    
    {basket.map(u=>(
      
      <li className="">
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={u.product.thumbnail} class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title mt-0">{u.product.title}</h5>
        <p class="card-text"><small class="text-muted">Adet : {u.amount}</small></p>
        <p class="card-text">Fiyat : {u.product.price}$</p>
        
      </div>
    </div>
  </div>
</div>
      

      </li>
      
    ))}
    <DropdownItem divider />
    <Link to="/sepetdetayi">
    <button className="btn btn-primary w-50 float-start mx-auto">Sepete git</button></Link>
  </ul>
</div>
    </div>
  )
}
