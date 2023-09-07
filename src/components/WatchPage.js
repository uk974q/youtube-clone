import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/compactSlice"
import { useSearchParams } from "react-router-dom"
import { COMMENTS_DUMMY_DATA } from "../utils/comments"

import PlayVideo from "./PlayVideo"
import Comment from "./Comment"

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const dispatchAction = useDispatch()
    useEffect(() => {
        dispatchAction(closeMenu())
    }, [])  
    return(
        <div className="m-2 grid grid-flow-col col-span-12">
            <div className="col-span-8">
                <PlayVideo linkId={searchParams.get("v")}/>
                <div className="p-5">
                    
                    {COMMENTS_DUMMY_DATA.length ? 
                        COMMENTS_DUMMY_DATA?.map((el,i) => (
                            <Comment key={el.name+i} data={el} />
                        )) : null
                    }
                </div>
            </div>
            <div className="col-span-2">
                Recommendations
            </div>
        </div>
    )
}

export default WatchPage