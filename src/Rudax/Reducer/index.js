import {combineReducers} from 'redux'
import listReducer from './listeTask'
const rootReducer=combineReducers({listReducer})
export default rootReducer