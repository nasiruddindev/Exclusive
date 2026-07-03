import { createSlice } from '@reduxjs/toolkit'
import { GiCardKingClubs } from 'react-icons/gi'

export const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: {
    secPreviousvalue: "",
    previousvalue: "",
    currentvalue: "",
  },

  reducers: {
    breadcrumb: (state,action) => {
      state.secPreviousvalue = state.previousvalue
      state.previousvalue = state.currentvalue
      state.currentvalue = action.payload
    },


  },
})


export const { breadcrumb } = breadcrumbSlice.actions

export default breadcrumbSlice.reducer
