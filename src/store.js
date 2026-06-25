import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counterSlice'
import  addToCartSlice  from './slices/addToCartSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    cart:addToCartSlice
  },
})
