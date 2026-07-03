import { createSlice } from '@reduxjs/toolkit'
import { GiCardKingClubs } from 'react-icons/gi'

export const addToWishlistSlice = createSlice({
  name: 'counter',
  initialState: {
    value: sessionStorage.getItem("wishlist")?JSON.parse(sessionStorage.getItem("wishlist")):[] ,
  },
  reducers: {
    wishlist: (state,action) => {
      if(!state.value.find((item) => item.title == action.payload.title)){
        state.value.push(action.payload)
      }
      sessionStorage.setItem("wishlist",JSON.stringify(state.value))

    },
    removeItem: (state,action) => {
      state.value.map((item,index)=>{
        if(item.title==action.payload.title){
          state.value.splice(index,1)
        }
      })

      sessionStorage.setItem("wishlist",JSON.stringify(state.value))

    },


  },
})


export const { wishlist, removeItem } = addToWishlistSlice.actions

export default addToWishlistSlice.reducer
