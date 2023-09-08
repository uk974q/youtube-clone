import { CHAT_MESSAGES, CHAT_NAMES } from "./constants"

export const createRandomMessage = (obj = null) => {
    if(obj){
        return {
            name: obj.name,
            message: obj.message
        }
    }
    return {
        name: CHAT_NAMES[Math.floor(Math.random() * CHAT_NAMES.length)],
        message: CHAT_MESSAGES[Math.floor(Math.random() * CHAT_MESSAGES.length)]
    }
}