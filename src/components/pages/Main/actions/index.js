import axios from 'axios'

import { API_CONNECTION } from '../../../../constants/app'

export const changeDescription = event => (
    {
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value        
    }
)

export const getAllToDoItens = () => {
    const request = axios.get(API_CONNECTION)
    return {
        type: "TODOS_LISTED",
        payload: request
    }
}

export const addNewToDo = (description) => {
    return dispatch => {
        axios.post(`${API_CONNECTION}new`, { description } )
        .then( resp => dispatch(
            {
                type: "TODO_CREATED",
                payload: resp.data.data
            }
        ))
        .then( resp => dispatch( getAllToDoItens() ) )
    }
}

export const setToDoAsDone = (todo) => {
    return dispatch => {
        axios.put(`${API_CONNECTION}set-as-done/${todo._id}`)
        .then( resp => dispatch( getAllToDoItens() ) )
    }
}

export const setToDoAsPending = (todo) => {
    return dispatch => {
        axios.put(`${API_CONNECTION}set-as-pending/${todo._id}`)
        .then( resp => dispatch( getAllToDoItens() ) )
    }
}

export const deleteToDo = (todo) => {
    return dispatch => {
        axios.delete(`${API_CONNECTION}remove/${todo._id}`)
        .then( resp => dispatch( getAllToDoItens() ) )
    }
}