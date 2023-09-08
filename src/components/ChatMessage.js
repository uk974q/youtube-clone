const ChatMessage = ({name, message}) => {
    return(
        <div className="flex px-3 pb-1">
            <i className="las la-user-circle text-lg mr-1"></i>
            <p className="ml-2 text-xs mt-1"><span className="font-bold mr-2">{name}</span>{message}</p>
        </div>
    )
}

export default ChatMessage