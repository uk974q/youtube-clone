const Autosuggest = ({suggestions}) => {
    
    if(!suggestions.length) return
    return (
        <ul className="absolute bg-white w-full rounded-lg border-2">
            {suggestions.map(el => (
                <li key={el} className="py-1 cursor-pointer hover:bg-slate-100 px-5">{el}</li>
            ))}
        </ul>
    )
}

export default Autosuggest