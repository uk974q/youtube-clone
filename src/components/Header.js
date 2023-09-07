import { useDispatch, useSelector } from "react-redux"
import { toggleSlice } from "../utils/compactSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_AUTOSUGGEST } from "../utils/constants"
import Autosuggest from "./Autosuggest"
import { addTerm } from "../utils/autosuggestSlice"

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const dispatchAction = useDispatch()
    const autoSuggestionSelector = useSelector((store) => store.autoSuggest.terms)

    useEffect(() => {
        const timer = setTimeout(() => fetchResults(), 300)
        return () => clearTimeout(timer)
    }, [searchQuery])

    const fetchResults = async () => {
        if(autoSuggestionSelector[searchQuery]) {
            setSuggestions(autoSuggestionSelector[searchQuery][1])
            return
        }
        let data = await fetch(YOUTUBE_AUTOSUGGEST+searchQuery)
        let res = await data.json()
        // console.log("Rest",res)
        setSuggestions(res[1])
        dispatchAction(addTerm(res))
    }

    return(
        <div className="grid grid-flow-col col-span-12 h-16 mb-2 items-center p-2 shadow-lg">
            <div className="h-12 flex items-center col-span-2">
                <i onClick={() => dispatchAction(toggleSlice())} className="las la-bars text-lg cursor-pointer"></i>
                <img alt="youtubelogo" className="ml-5 " height="10px" width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png" />
            </div>
            <div className="h-12 flex items-center w-full col-span-8 justify-center">
                <div className="relative w-1/2 h-2/3 py-0">
                    <input placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className="py-0 px-5 h-full w-full rounded-l-full border-gray-200 border-2"/>
                    <Autosuggest suggestions={suggestions}/>
                </div>
                <button className="rounded-r-full py-0 px-3 h-2/3 text-sm bg-gray-100 text-black"><i className="las la-search"></i></button>
            </div>
            <i className="las la-user-circle text-4xl cursor-pointer col-span-2 text-center"></i>
        </div>
    )
}

export default Header