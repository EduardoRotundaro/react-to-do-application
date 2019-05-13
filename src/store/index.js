import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './reducers'

import { DEV_REDUX_TOOL } from '../constants/app'

export default applyMiddleware(thunk, multi, promise)(createStore)(reducers, DEV_REDUX_TOOL )