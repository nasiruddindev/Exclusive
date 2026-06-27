import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action) => {
      let item = state.value.find((item) => item.title == action.payload.title)

      if (item) {
        item.quantity += 1
      } else {
        state.value.push(action.payload)
      }
    },
    increment: (state,action)=>{
      console.log(state.value)
      console.log(action.payload)

      state.value.map((item)=>{
        if(item.title==action.payload.title){
          item.quantity+=1
        }
      })
    },
    decrement: (state,action)=>{
      console.log(state.value)
      console.log(action.payload)

      state.value.map((item,index)=>{
        if(item.title==action.payload.title){
          item.quantity-=1
          if(item.quantity<1){
            state.value.splice(index,1)
          }
        }
      })
    },

  },
})

export const { addtocart,increment,decrement } = addToCartSlice.actions

export default addToCartSlice.reducer
