import {combineReducers, applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import common from './common/reducer'

const reducers = combineReducers({
  common
})

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
