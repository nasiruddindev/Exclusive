import { createSlice } from '@reduxjs/toolkit'
import { GiCardKingClubs } from 'react-icons/gi'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => {
        state.value+=action.payload
    },
    decrement: (state,action) => {
      if(state.value>1){
        state.value-=action.payload
      }
    },

  },
})


export const { increment,decrement} = counterSlice.actions

export default counterSlice.reducer
