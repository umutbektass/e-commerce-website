import React from 'react'
import { FaUserCheck} from 'react-icons/fa';
import { useFormik } from 'formik'
import { useDispatch ,useSelector} from 'react-redux';
import { userLogin } from '../redux/userSlice/userSlice';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error,setError]=useState("")
    const users = useSelector(state=>state.user.user)
    
  
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:(values)=>{
            const userCheck = users.find(i=>i.email==values.email)
            if(userCheck){
                if(userCheck.password==values.password){
                    setError("Giriş Başarılı")
                    dispatch(userLogin());
                    navigate("/")
                    
                    
                }
                setError("Yanlış şifre")
            }
           else if(!userCheck){
                setError("Email adresine ait kullanıcı bulunamadı.")
            }
           
            
        }

    })
   
    
  return (
    <div className="container my-5">
    <div className="row">
        <FaUserCheck className="my-2" style={{fontSize:"80px"}}></FaUserCheck>
        <form onSubmit={formik.handleSubmit}>
        <div className="offset-3 col-6">
    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
  onChange={formik.handleChange} name="email"></input>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={formik.handleChange} name="password"></input>
  <label for="floatingPassword">Password</label>
</div>
<button type="submit" className=" my-4 btn btn-primary w-100">Giriş yap</button>

</div>
</form>
</div>
    </div>
  )
}

export default Login