import { configureStore } from "@reduxjs/toolkit";
import compactSliceReducer from "./compactSlice";
import autosuggestReducer from "./autosuggestSlice";
import chatReducer from "./ChatSlice";

const appStore = configureStore({
    reducer: {
        compactSlice : compactSliceReducer,
        autoSuggest : autosuggestReducer,
        chats: chatReducer
    }
})
export default appStore