import { Link } from "react-router-dom"

const Thumbnail = ({imgLink, urlId, title, channel, count, likes}) => {

    return(
        <Link to={"/video?v="+urlId}>
            <div className="flex flex-col cursor-pointer hover:bg-slate-100 p-2 shadow-xl rounded-lg">
                <img alt={title} className="rounded-lg"src={imgLink} width="100%" height="50%" />
                <div className="flex p-2">
                    <i className="las la-user-circle text-2xl cursor-pointer text-center text-red-600"></i>
                    <div className="grid ml-2 overflow-hidden w-full">
                        <h1 className="col-span-10 font-bold text-sm">{title.length > 30 ? title.slice(0,30)+"..." : title}</h1>
                        <span className="col-span-10 text-sm font-semibold my-2">{channel}</span>
                        <span className="col-span-5 text-xs">{count} views</span>
                        <span className="col-span-5 justify-self-end text-xs"><i className="las la-thumbs-up text-blue-800"></i>{likes}</span>
                    </div>
                </div>
            </div>
        </Link>

        
    )
}

export default Thumbnail