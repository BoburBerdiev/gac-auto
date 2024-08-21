import { createSlice } from "@reduxjs/toolkit";

const carSale = createSlice({
    name: 'carSale' ,
    initialState: {
        position: ' ',
        exterior: ' ',
        interior: ' ',
    },
    reducers: {
      setPosition: (state,{payload} ) =>{
        state.position = payload
      },
      setExterior: (state,{payload} ) =>{
        state.exterior = payload
      },
      setInterior: (state,{payload} ) =>{
        state.interior = payload
      },
    }
})



export const {setPosition, setExterior, setInterior} = carSale.actions
export default carSale.reducer