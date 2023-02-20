import React from 'react'
import { Outlet,Navigate ,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'



function ProtectedRegister() {
    
    
    let login = useSelector(state=>state.user.loginCheck)
    
  return (
    <div>
      {
        login ? <Navigate to="/"/>  : <Outlet/>
        
       
      }
    </div>
  )
}

export default ProtectedRegister
