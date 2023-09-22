import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constants"
import Thumbnail from "./Thumbnail"
import { useDispatch } from "react-redux"
import { setTags } from "../utils/videoDataSlice"

const VideoContainer = () => {

    const [videos, setVideos] = useState([])
    const dispatchAction = useDispatch()

    useEffect(() => {
        fetchVideos()
    },[])

    const fetchVideos = async () => {
        let data = await fetch(YOUTUBE_API)
        let jsonData = await data.json()
        // console.log('Data',jsonData)
        let videoData = jsonData.items.map(el => {
            dispatchAction(setTags(el.snippet.tags))
            return (
                <Thumbnail key={el.id} urlId={el.id} imgLink={el.snippet.thumbnails.medium.url} title={el.snippet.title} channel={el.snippet.channelTitle} count={el.statistics.viewCount} likes={el.statistics.likeCount}/>
            )
        })
        setVideos(videoData)
    }


    return(
        <div className="grid lg:grid-cols-5 gap-4 mt-4">
            {videos.length ? videos : null}
        </div>
    )
}
export default VideoContainer