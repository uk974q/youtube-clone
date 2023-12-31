import { useDispatch, useSelector } from "react-redux"
import { toggleSlice } from "../utils/compactSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_AUTOSUGGEST } from "../utils/constants"
import Autosuggest from "./Autosuggest"
import { addTerm } from "../utils/autosuggestSlice"
import { Link } from "react-router-dom"

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
        <div className="flex h-16 mb-2 items-center p-2 shadow-lg">
            <div className="h-12 flex items-center mr-2 ">
                <i onClick={() => dispatchAction(toggleSlice())} className="las la-bars text-lg cursor-pointer"></i>
                <Link to={"/"}>
                    <img alt="youtubelogo" className="ml-5 " height="10px" width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png" />
                </Link>
            </div>
            <div className="h-12 flex-grow mx-auto flex justify-center">
                <div className="h-2/3 w-2/3 py-0 flex my-auto">
                    <div className="relative flex-grow" >
                        <input placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className="py-0 px-5 h-full w-full rounded-l-full border-gray-200 border-2"/>
                        <Autosuggest suggestions={suggestions}/>
                    </div>
                    <button className="rounded-r-full py-0 px-3 text-sm bg-gray-100 text-black"><i className="las la-search"></i></button>
                </div>
            </div>
            <i className="las la-user-circle text-4xl cursor-pointer flex-grow-0 text-center self-end ml-auto"></i>
        </div>
    )
}

export default Header