import React from 'react'
import { Link } from 'react-router-dom'

export default function SignedOut() {
  return (
<div>
  <Link to="/login"><button className="btn btn-primary">Giriş yap</button></Link>
    
    <Link to="/register"> <button className="btn btn-primary me-2" >Kayıt Ol</button></Link>
</div>
  )
}
