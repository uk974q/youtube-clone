import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/compactSlice"
import { useSearchParams } from "react-router-dom"
import { COMMENTS_DUMMY_DATA } from "../utils/comments"

import PlayVideo from "./PlayVideo"
import Comment from "./Comment"
import LiveChat from "./LiveChat"

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const dispatchAction = useDispatch()
    useEffect(() => {
        dispatchAction(closeMenu())
    }, [])  
    return(
        <div className="grid grid-cols-12 col-span-12">
            {/* <div className="col-span-12 lg:col-span-9"> */}
                <PlayVideo linkId={searchParams.get("v")}/>
                <div className="col-span-12 lg:col-span-3 pl-3">
                    <LiveChat />
                </div>
                <div className="col-span-12 p-5">
                    
                    {COMMENTS_DUMMY_DATA.length ? 
                        COMMENTS_DUMMY_DATA?.map((el,i) => (
                            <Comment key={el.name+i} data={el} />
                        )) : null
                    }
                </div>
            {/* </div> */}
            
        </div>
    )
}

export default WatchPage