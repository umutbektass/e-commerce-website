import React, { useState } from 'react'
import { basket ,incrementBasket,descrementBasket} from '../redux/basketSlice/basketSlice'
import { useSelector ,useDispatch} from 'react-redux'
import { DropdownItem } from 'reactstrap'
import Mastercard from '../img/mastercard.jpg'
function SepetDetail() {
  const dispatch = useDispatch()
  const basketDetail = useSelector(basket)
 const total= basketDetail.reduce((toplam,urun)=>toplam = (toplam+(urun.amount * urun.product.price)),0)
 
  
  return (
    <div className="container">
      <div className="card my-4 ">
        {
          basketDetail.map(u=>(
            <div className="offset-1 row my-2 ">
            <div className="col-3">
              <img src={u.product.thumbnail} class="card-img-top ms-2" alt="..." style={{width:"80%",height:"8rem"}}></img>
            </div>
            <div className="col-2">
              <h6>{u.product.title}</h6>
            </div>
            <div className="col-1">
              <h6>${u.product.price}</h6>
            </div>
            <div className="col-1">
              <h6>{u.product.rating}</h6>
            </div>

            <div className="col-2">
            <div class="input-group mb-3">
  <button class="btn btn-secondary" type="button" id="button-addon1" onClick={()=>dispatch(incrementBasket(u))}>+</button>
  <input type="text" class="sepetdetailinput" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={u.amount}></input>
  <button class="btn btn-secondary" type="button" id="button-addon1" onClick={()=>dispatch(descrementBasket(u))}>-</button>
</div>

            </div>
            <div className="col-2">= ${u.amount * u.product.price}</div>
          </div>
          ))
        }
        <div className="container">
        <div className="row total">
          <div className="offset-8 col-3">
        <p className="fw-semibold">Total :<span style={{color:"#F2921D"}}>$
          {total}</span>
           </p>
          <img src={Mastercard} style={{width:"5rem" ,height:"3rem"}}></img>
           </div>
          
        </div>
       </div>
        </div>
    </div>
  )
}

export default SepetDetail