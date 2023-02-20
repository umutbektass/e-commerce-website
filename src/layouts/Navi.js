import React from 'react'
import Signedln from './Signedln'
import SignedOut from './SignedOut'
import CartSummary from './CartSummary'
import { Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getProduct } from '../redux/productSlice/productSlice'


export default function Navi() {
  const dispatch = useDispatch()
  const loginCheck  = useSelector(state=>state.user.loginCheck)
  const basket = useSelector(state=>state.basket.basket)
  console.log(loginCheck)

  
  
   return (
     <div>
      <nav class="navbar navbar-expand-lg bg-dark">
       <div className="container">
        <Link to="/" className="navbar-brand text-white" onClick={()=>dispatch(getProduct())} >Navbar</Link>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
     <li class="nav-item">
           <a class="nav-link active text-white" aria-current="page" href="#">Messages</a>
         </li>
         <li class="nav-item">
           
         </li>
         </ul>
         {basket.length>0 ?  <CartSummary></CartSummary>:null}
         
         {
           loginCheck!=true ?  <SignedOut></SignedOut> :<Signedln></Signedln>
           
          
         }
     </div>
     
      </nav>
         
     </div>
   )
 }
 