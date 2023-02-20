import React from 'react'
import { useDispatch } from 'react-redux'
import {userLogout } from '../redux/userSlice/userSlice'
import { FaCaretDown } from 'react-icons/fa';

export default function Signedln() {
  const dispatch = useDispatch()
  return (
    
        <div>
<div class="dropdown mx-2">
  <img src='https://avatars.githubusercontent.com/u/1?v=4' className="dropdown-toggle rounded-circle" style={{width:"3rem",height:"3rem"}} data-bs-toggle="dropdown" aria-expanded="false" role="button"></img>
  <FaCaretDown style={{color:"white"}} role="button"  data-bs-toggle="dropdown"></FaCaretDown>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>dispatch(userLogout())}>Çıkış yap</a></li>
  </ul>
  
</div>

    </div>
  )
}
