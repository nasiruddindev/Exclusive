import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counterSlice'
import  addToCartSlice  from './slices/addToCartSlice'
import  addToWishlistSlice  from './slices/addToWishlistSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    cart:addToCartSlice,
    wishlist:addToWishlistSlice
  },
})
