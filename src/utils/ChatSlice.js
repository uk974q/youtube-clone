import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./constants";

const ChatSlice = createSlice({
    name:"chat",
    initialState: {
        messages:[]
    },
    reducers:{
        addChatMessage : (state, action) => {
            if(state.messages.length == LIVE_CHAT_OFFSET){
                state.messages.pop()
            }
            state.messages.unshift(action.payload)
        }
    }
})

export const {addChatMessage} = ChatSlice.actions
export default ChatSlice.reducer