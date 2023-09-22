import { useSelector } from "react-redux"
import Button from "./Button"

const ButtonList = () => {
    const buttonList = useSelector((store) => store.videoData.tags)
    // const buttonList = ["All", "Tags", "Movie", "Sitar", "Folk Music", "Cricket", "Football", "Games", "Cooking"]
    return(
        <div className="flex flex-wrap gap-2">
            {buttonList.map(el => <Button key={el} title={el} />)}
        </div>
    )
}
export default ButtonList