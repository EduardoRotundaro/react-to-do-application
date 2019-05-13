import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
    changeDescription, 
    getAllToDoItens, 
    addNewToDo, 
    setToDoAsDone, 
    setToDoAsPending, 
    deleteToDo 
} from '../actions'

const mapStateToProps = state => (
    {
        description: state.todo.description,
        list: state.todo.list
    }
)

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        changeDescription,
        getAllToDoItens,
        addNewToDo,
        setToDoAsDone,
        setToDoAsPending,
        deleteToDo
    },
    dispatch
)

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component)