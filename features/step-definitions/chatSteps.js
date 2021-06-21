import { Given, When, Then } from '@cucumber/cucumber';
import {tests} from '../support/test';


Given("I see that both users are one page", function(){
    tests.chatTest.usersOpen()
});

When("I see that both users are chosen their nickname", function(){
    tests.chatTest.usersChooseUsername()
});

When("I see that both useres are connected", function(){
    tests.chatTest.usersConnect()
});

When("I see that both users see themselves", function(){
    tests.chatTest.usersFindThemselves()
});

Then("I see that user 1 sends a message", function(){
    tests.chatTest.user1SendsMessage()
});

Then("I see that user 2 recieved message", function(){
    tests.chatTest.user2GetsMessage()
});

Then("I see that user 2 sends a message", function(){
    tests.chatTest.user2SendsMessage()
});

Then("I see that user 1 recieved message", function(){
    tests.chatTest.user1GetsMessage()
});

Then("I see that both users are disconnected", function(){
    tests.chatTest.usersDC()
});