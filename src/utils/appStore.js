import { configureStore } from "@reduxjs/toolkit";
import compactSliceReducer from "./compactSlice";
import autosuggestSlice from "./autosuggestSlice";

const appStore = configureStore({
    reducer: {
        compactSlice : compactSliceReducer,
        autoSuggest : autosuggestSlice
    }
})
export default appStore