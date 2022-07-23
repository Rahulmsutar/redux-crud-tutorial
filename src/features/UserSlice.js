import { createSlice } from '@reduxjs/toolkit'
import { userData } from './UserData'
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    value: userData,
  },
  reducers: {
     addUser:(state,action) =>{
        state.value.push(action.payload)
     },
     deleteUser:(state,action) =>{
        state.value = state.value.filter((item)=>{
            return item.id !== action.payload
        })
     },
     updateUser:(state,action)=>{
        state.value.map((item)=>{
            if(item.id === action.payload.id){
                item.username = action.payload.username
            }
        })
      
     }
  },
})



export const { addUser,deleteUser,updateUser } = userSlice.actions

export default userSlice.reducer