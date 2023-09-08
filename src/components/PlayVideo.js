import { YOUTUBE_VIDEO } from "../utils/constants"

const PlayVideo = ({linkId}) => {
    return (
        <iframe width="100%" height="415" 
        className="pl-5 pr-3 py-0"
            src={YOUTUBE_VIDEO+linkId} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        > 
        </iframe>
    )
}

export default PlayVideo