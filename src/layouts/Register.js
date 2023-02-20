import React,{useEffect, useState}from 'react'
import { useFormik } from 'formik'
import validationSchema from '../validations/validations';
import { useDispatch } from 'react-redux';
import { addUser, userLogin } from '../redux/userSlice/userSlice';
import { useSelector } from 'react-redux';
import '../../src/style.css'
import { useNavigate } from 'react-router-dom';
import { FaUserCircle} from 'react-icons/fa';


function Register({history}) {
  const navigate=useNavigate()
const [error,setError]=useState("")
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.user.user)
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            confirmpassword:""
        },
        validationSchema,
        onSubmit:(values)=>{
            const userCheck = userList.find(item=>(item.email==values.email))
            if(userCheck){
                return setError("E-mail kayıtlıdır Lütfen farklı hesap deneyiniz.")
            }
          else{
            dispatch(addUser({email:values.email , password:values.password}))
           navigate("/")
        }
        }
        
    })
    
  return (
    <div className="my-4">
      <div className="container">
        <div className="row">
          <FaUserCircle className="mb-4" style={{fontSize:"110px"}}></FaUserCircle>
          
          <div className="offset-3 col-6">
        <div className="contect">
        <form onSubmit={formik.handleSubmit}>
       
        <div class="form-floating mb-3">
          
        <input type="email" class="form-control w-100" id="floatingInput" placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.email} name="email"></input>
  <label for="floatingInput">Email address</label>
  
  
  {formik.touched.email && formik.errors.email ? <div className="float-end">
    <p className="float-start inline p-2 mt-2">{formik.errors.email}</p></div>:null}
    
  
  </div>
  <div class="form-floating">
  <input  type="password" class="form-control w-100" id="floatingPassword" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} name="password" ></input>
  <label for="floatingPassword">Password</label>
  {formik.touched.password && formik.errors.password ? <div className="float-end my-4" ><p className="p-2 inline">{formik.errors.password}</p></div>:null}
  </div>
  <div class="form-floating my-2">
  <input type="password" class="form-control w-100" placeholder="confirmpassword" name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} id="floatingPassword"></input>
  <label for="floatingPassword">Confirm Password</label>
  {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className="float-end mt-3"><p className="p-2 inline">{formik.errors.confirmpassword}</p></div>:null}
  </div>
<button type="submit" className="btn btn-primary w-100 my-3">Kayıt Ol</button>

</form>
</div>
</div>
</div>

</div>
    </div>
  )
}

export default Register