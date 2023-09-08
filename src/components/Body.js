import { useSelector } from "react-redux"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Body = () => {
    const value = useSelector((store) => store.compactSlice.toggle)

    return(
        <div className="grid grid-cols-12 mr-2">
            {value && <Sidebar />}
            <Outlet />
        </div>
    )
}
export default Body