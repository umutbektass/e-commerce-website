import { createSlice } from "@reduxjs/toolkit";



    

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        user:[{"email":"umut1@gmail.com","password":"12345"}],
        loginCheck:false
    },
    reducers:{
        addUser:(state,action)=>{
           state.user.push(action.payload)
           state.loginCheck=true
        },
        userLogin:(state,action)=>{
            state.loginCheck=true
            
            
        },
        userLogout:(state,action)=>{
            
            state.loginCheck=false
            
        }  
    },
    extraReducers:{}
})

export const {addUser,userLogin,userLogout} = userSlice.actions;
export default userSlice.reducer;