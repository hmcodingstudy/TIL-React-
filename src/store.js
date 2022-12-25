import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './user/userSlice.js'


let cart= createSlice({
    name: 'stock',
    initialState: 
    [
        {id : 0, name : 'White and Black', count : 1},
        {id : 1, name : 'Grey Yordan', count : 2}
    ],
    reducers:{
          addCount(state, action){
            let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
            state[번호].count++
          },
          addItem(state, action){
            state.push(action.payload)
          }
        }
})

export let { addCount, addItem } = cart.actions


export default configureStore({
  reducer: { 
    cart: cart.reducer,
    user : user.reducer
  }
}) 