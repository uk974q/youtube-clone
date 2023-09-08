import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addChatMessage } from "../utils/ChatSlice"
import ChatMessage from "./ChatMessage"
import { createRandomMessage } from "../utils/helper"

const LiveChat = () => {
    const dispatchAction = useDispatch()
    const chatMessages = useSelector((store) => store.chats.messages)
    const [typedMessage, setTypeMessaged] = useState("")
    useEffect(() => {
        const timer = setInterval(() => {
            dispatchAction(addChatMessage(createRandomMessage()))
        }, 2000)
        return () => clearInterval(timer)
    }, [chatMessages])

    const sendMessage = () => {
        dispatchAction(addChatMessage({
            name: "User",
            message: typedMessage
        }))
        setTypeMessaged("")
    }

    return(
        <>
            <div className="flex flex-col-reverse pr-1 pt-2 border-black border-2 h-[415px] border-b-0 bg-slate-200 overflow-hidden overflow-y-auto">
                {
                    chatMessages?.length ? chatMessages.map((el,i) => (
                        <ChatMessage key={el.name+i}name={el.name} message={el.message}/>
                    )) : null
                }
            </div>
            <div className="flex pb-4 pl-5 border-black border-2 border-t-0 bg-slate-200">
                <input type="text" value={typedMessage} onChange={(e) =>setTypeMessaged(e.target.value)} className="mr-2 bg-slate-200 w-2/3 focus:border-transparent  border-t-0 border-x-0 border-b-2 border-slate-400" placeholder="Enter message"/>
                <button onClick={sendMessage} className="bg-slate-200 text-slate-400 font-bold cursor-pointer">Send</button>
            </div>
        </>
    )
}

export default LiveChat