const Comment = (props) => {
    const {name, comment, reply} = props.data
    return(
        <div>
            <div className="grid grid-cols-[20px_auto] p-2 shadow-lg border-2 rounded-lg items-center mb-1">
                <i className="las la-user-circle text-xl cursor-pointer"></i>
                <div className="ml-2">
                    <h2 className="font-bold text-sm">{name}</h2>
                    <p className="text-sm">{comment}</p>
                </div>
            </div>
            {reply.length ? <div className="pl-5 border-l-2 border-l-slate-400"><Comment data={reply[0]}/></div> : null}   
        </div>
        
    )
}

export default Comment