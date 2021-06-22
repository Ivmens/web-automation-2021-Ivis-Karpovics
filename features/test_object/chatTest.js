import {pages} from '../support/pages'
var user1Name = "Andris"
var user2Name = "Juris"
var user1MSG = "smt"
var user2MSG = "cits"


export class ChatTest {

    usersOpen(){
        pages.user1.chatPage.thisPage()
        pages.user2.chatPage.thisPage()
        pages.user1.chatPage.removeElement()
        pages.user2.chatPage.removeElement()
    }
    usersChooseUsername(){
        pages.user1.chatPage.chooseUsername().waitForEnabled()
        pages.user2.chatPage.chooseUsername().waitForEnabled()
        
        pages.user1.chatPage.chooseUsername().setValue(user1Name)
        pages.user2.chatPage.chooseUsername().setValue(user2Name)
    }
    usersConnect(){
        pages.user1.chatPage.getConnection().click()
        pages.user2.chatPage.getConnection().click()
        browser.pause(5000)

        pages.user1.chatPage.getCMessage().waitForDisplayed()
        pages.user2.chatPage.getCMessage().waitForDisplayed()
    }
    usersFindThemselves(){
        pages.user1.chatPage.getUser(user2Name).waitForDisplayed()
        pages.user2.chatPage.getUser(user1Name).waitForDisplayed()
    }
    user1SendsMessage(){
        pages.user1.chatPage.sendMessage().setValue(user1MSG)
        pages.user1.chatPage.messageBtn().click()

    }
    user2GetsMessage(){
        pages.user2.chatPage.getMessage(user1MSG, user1Name).waitForDisplayed()
    }
    user2SendsMessage(){
        pages.user2.chatPage.sendMessage().setValue(user2MSG)
        pages.user2.chatPage.messageBtn().click()
    }
    user1GetsMessage(){
        pages.user1.chatPage.getMessage(user2MSG, user2Name).waitForDisplayed()
    }
    usersDC(){
        pages.user1.chatPage.DCBtn().click()
        pages.user1.chatPage.getDcMessage().waitForDisplayed()

        pages.user2.chatPage.DCBtn().click()
        pages.user2.chatPage.getDcMessage().waitForDisplayed()
    }

}