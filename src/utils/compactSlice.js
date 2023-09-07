import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"compact",
    initialState: {
        toggle: true 
    },
    reducers:{
        toggleSlice: (state) => {
            state.toggle = !state.toggle
        },
        closeMenu: (state) => {
            state.toggle = false
        }
    }

})


export const {toggleSlice, closeMenu} = slice.actions
export default slice.reducer