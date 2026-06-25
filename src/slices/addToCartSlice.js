import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state,action) => {



      let item = state.value.find(item=>item.title==action.payload.title)

      if(item){
        item.quantity+=1
      }else{
        state.value.push(action.payload)
      }

    //   let a= state.value.some(item=>item.title==action.payload.title)

    //  if(a){
    //   state.value=state.value.map(item=>{
    //     if(item.title===action.payload.title){
    //       return{...item,quantity:item.quantity+1}
    //     }
    //     return item
    //   })
    //  }else{
    //   state.value.push(action.payload)
    //  }



    },


  },
})

export const {addtocart} = addToCartSlice.actions

export default addToCartSlice.reducer
