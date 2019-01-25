import { combineReducers } from 'redux'
import albums from './albums'
import helloWorld from './test'

export default combineReducers({
    albums,
    helloWorld
})