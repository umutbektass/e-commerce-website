import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import {Route, Routes} from 'react-router-dom'



export default function Dashboard() {
  return (
    <div>
      <div className="mx-5 mt-5">
        <div className="row">
          <div className="d-none d-md-block col-md-4 col-lg-3">
        <Categories></Categories>
        </div>
        <div className="col-8">
        <Routes>
        <Route exact path="/" element={<ProductList></ProductList>}></Route>
        <Route exact path="/product" element={ <ProductList></ProductList>}> </Route>
          </Routes>
        </div>
        </div>
        </div>  
    </div>
  )
}
