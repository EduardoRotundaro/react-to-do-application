const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        case 'TODOS_LISTED':
            return { ...state, list: action.payload.data.data };
        case 'TODO_CREATED':
            return { ...state, description: '' };
        default:
            return state;
    }
}