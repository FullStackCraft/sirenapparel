import { combineReducers, createStore } from 'redux'
import cartReducer from './reducers/cartReducer'
import locationReducer from './reducers/locationReducer'
import languageReducer from './reducers/languageReducer'


const rootReducer = combineReducers({cart: cartReducer, location: locationReducer, language: languageReducer});

export default createStore(rootReducer)