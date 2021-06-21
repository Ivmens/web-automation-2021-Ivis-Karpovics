import { ChatTest } from '../test_object/chatTest'
import {pages} from './pages'

export class Tests{
    constructor(pages){
        this.chatTest = new ChatTest(pages)
    }
}

const tests = new Tests(pages)
export {tests}