import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counterSlice'
import  addToCartSlice  from './slices/addToCartSlice'
import  addToWishlistSlice  from './slices/addToWishlistSlice'
import  breadcrumbSlice  from './slices/breadcrumbSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    cart:addToCartSlice,
    wishlist:addToWishlistSlice,
    breadcrumb: breadcrumbSlice
  },
})
