import Button from "./Button"

const ButtonList = () => {
    const buttonList = ["All", "Tags", "Movie", "Sitar", "Folk Music", "Cricket", "Football", "Games", "Cooking"]
    return(
        <div className="flex gap-2">
            {buttonList.map(el => <Button key={el} title={el} />)}
        </div>
    )
}
export default ButtonList