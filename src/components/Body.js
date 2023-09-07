import { useSelector } from "react-redux"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Body = () => {
    const value = useSelector((store) => store.compactSlice.toggle)

    return(
        <div className="grid grid-cols-[minmax(100px,150px)_auto]">
            {value && <Sidebar />}
            <Outlet />
        </div>
    )
}
export default Body