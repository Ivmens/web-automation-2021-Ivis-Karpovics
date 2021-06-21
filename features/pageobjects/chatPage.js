import {Page} from "../pageobjects/basePage"

export class ChatPage extends Page{
    thisPage(){
        this.browser.url('https://demos.mqtt.cool/chat/')
        this.browser.pause(1000)
    }
    chooseUsername(){
        return this.browser.$('#user')
    }
    getConnection(){
        return this.browser.$('#connectBtn')
    }
    getCMessage(){
        return this.browser.$('div=Connected to the MQTT broker at tcp://broker.mqtt.cool:1883')
    }
    getUser(username){
        return this.browser.$('li=' + username)
    }
    sendMessage(){
        return this.browser.$('#sendMessage')
    }
    messageBtn(){
        return this.browser.$('#replyBtn')
    }
    getMessage(message, username){
        return this.browser.$('div='+ username+ ': ' + message)
    }
    DCBtn(){
        return this.browser.$('#disconnectBtn')
    }
    getDcMessage(){
        return this.browser.$('div=Connection to tcp://broker.mqtt.cool:1883 lost')
    }

}