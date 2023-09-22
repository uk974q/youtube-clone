import { configureStore } from "@reduxjs/toolkit";
import compactSliceReducer from "./compactSlice";
import autosuggestReducer from "./autosuggestSlice";
import chatReducer from "./ChatSlice";
import videoDataSlice from "./videoDataSlice";

const appStore = configureStore({
    reducer: {
        compactSlice : compactSliceReducer,
        autoSuggest : autosuggestReducer,
        chats: chatReducer,
        videoData: videoDataSlice
    }
})
export default appStore