import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToBasket } from '../redux/basketSlice/basketSlice'
import { useDispatch } from 'react-redux'
import '../style.css'
export default function ProductDetail() {
  
  let {id} = useParams()
  const [products,setProducts]=useState([])
  let productImages =[]
  let item = []
  const product = useSelector(state=>state.product.items)
  const dispatch = useDispatch()
  
   for(let i =0;i<product.length;i++){
    if(product[i].category==products.category){
     item.push(product[i])}

   }
   

   const  otherİtemsFilter=item.filter(i=>i.id!==products.id)
  
  
  
  
  
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${id}`).then(item=>setProducts(item.data))
      
      
    },[])
    for(let prop in products.images){
      productImages.push(products.images[prop])
    }
   

  return (
    <div>
      <div className="container card my-5">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="" style={{height:"27rem",}}>
  



  <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
  
    <div class="carousel-item active">
      <img src={products.thumbnail} class="d-block w-100 rounded" alt="..." style={{height:"27rem"}}></img>
    </div>
    {
      productImages.map(img=>(
        <div class="carousel-item">
        <img src={img} class="d-block w-100 rounded" alt="..." style={{height:"27rem"}}></img>
      </div>
        ))
    }
    
  </div>
  <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





  
</div>
        </div>
        <div className="col-xs-12 col-6">
        
  
  <div class="card-body">
    <h5 class="card-title">{products.brand} {products.title}</h5>
    <h6 class="card-subtitle my-5 text-primary">{products.rating} Ürün puan değerlendirmesi </h6>
    <h5 class="card-text mb-2 text-success">${products.price}</h5>
    <p class="card-text">{products.description}</p>
    <button className="btn btn-primary" onClick={()=>dispatch(addToBasket(products))}>Sepete ekle</button>
    
  </div>

        </div>
        
      </div>
      






      </div>
      <div className="container">
      <div className="wrapper my-5 mx-auto">
        
        {
          otherİtemsFilter.map(item=>(
            <Link to={`/product/${item.id}`} style={{textDecoration:"none"}}>
            <div class="card mx-4">
            <img src={item.thumbnail} class="card-img-top" alt="..." style={{height:"9rem"}}></img>
            <div class="card-body">
    <p class="card-title fs-35 text m-0 text-dark"><span className="fw-semibold m-0 text-dark">{item.title} </span>{item.description.substr(0,27)}</p>
    <p class="card-text price fw-bold">{item.price} TL</p>
            
</div>
          </div>
          </Link>
          ))
          
        }
      
      </div>
      </div>
    </div>
  )
}
