import { combineReducers, createStore } from 'redux'
import cartReducer from './reducers/cartReducer'
import locationReducer from './reducers/locationReducer'

const rootReducer = combineReducers({cart: cartReducer, location: locationReducer});

export default createStore(rootReducer)