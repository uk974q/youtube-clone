import { Link } from "react-router-dom"

const Sidebar = () => {
    return(
        <div className="col-span-2 shadow-lg mr-2">
            <ul className="flex flex-col">  
                <li className="p-2 cursor-pointer hover:rounded-lg hover:bg-slate-200"><i className="las la-home mr-2"></i><Link to="/" >Home</Link></li>
                <li className="p-2 cursor-pointer hover:rounded-lg hover:bg-slate-200"><i className="las la-home mr-2"></i>Shorts</li>
                <li className="p-2 cursor-pointer hover:rounded-lg hover:bg-slate-200"><i className="las la-home mr-2"></i>Subscription</li>
                <li className="p-2 cursor-pointer hover:rounded-lg hover:bg-slate-200"><i className="las la-home mr-2"></i>Library</li>
                <li className="p-2 cursor-pointer hover:rounded-lg hover:bg-slate-200"><i className="las la-home mr-2"></i>History</li>
            </ul>
        </div>
    )
}
export default Sidebar