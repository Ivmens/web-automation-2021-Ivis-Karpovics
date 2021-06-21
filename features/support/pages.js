import {ChatPage} from '../pageobjects/chatPage'

class Pages{
    constructor(){
        this.user1 = {
            chatPage: new ChatPage('user1')
        }
        this.user2 = {
            chatPage: new ChatPage('user2')
        }
    }
}

const pages = new Pages()
export {pages}