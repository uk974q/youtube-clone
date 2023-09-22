import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
    name: "videoData",
    initialState: {
        tagsCountmap: {},
        tags: []
    },
    reducers:{
        setTags: (state,action) => {
            action.payload?.forEach(el => {
                if(state.tagsCountmap[el]){
                    state.tagsCountmap[el] += 1
                }else{
                    state.tagsCountmap[el] = 1
                }
            })
            let temp = Object.entries(state.tagsCountmap).map(([k,v]) => ({k,v}))
            temp.sort((a,b) => b.v - a.v)
            state.tags = temp.map(el => el.k).slice(0,10)
        }
    }
})
export const {setTags} = videoDataSlice.actions
export default videoDataSlice.reducer