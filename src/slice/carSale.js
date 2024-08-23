import { createSlice } from "@reduxjs/toolkit";

const carSale = createSlice({
    name: 'carSale' ,
    initialState: {
        model: ' ',
        position: ' ',
        exterior: ' ',
        interior: ' ',
    },
    reducers: {
      setModel: (state,{payload} ) =>{
        state.model = payload
      },
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



export const {setPosition, setExterior, setInterior, setModel} = carSale.actions
export default carSale.reducer