import { combineReducers } from 'redux';

import toDoReducer from './toDo';

const rootReducer = combineReducers({
    todo: toDoReducer
})

export default rootReducer;