import { createSlice } from "@reduxjs/toolkit";

const autoSuggest = createSlice({
    name: "autosuggest",
    initialState : {
        terms: {}
    },
    reducers: {
        addTerm : (state, action) => {
            state.terms[action.payload[0]] = action.payload
        }
    }
})

export const {addTerm} = autoSuggest.actions
export default autoSuggest.reducer