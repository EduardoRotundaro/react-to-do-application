import React from 'react'

import If from '../../../layout/If'
import Button from '../../../templates/elements/CircleButton'

export default props => {

    const renderRows = ()=>{
        const list = props.list || []
        
        return list.map( (todo)=>(

            <li key={todo._id} className="table-row">
                <div className={ `clmn clmn-1 text-line ${todo.done? 'task-done' : ''}` } data-label="Job Id">{ todo.description }</div>
                <div className="clmn clmn-2" data-label="Customer Name">
                    <If condition={ !todo.done } ><Button icon='fas check' color="success" onclick={ ()=> props.handleSetAsDone(todo) } /></If>
                    <If condition={ todo.done } ><Button icon='fas undo' color="warning" onclick={ ()=> props.handleSetAsPending(todo) } /></If>
                    <Button icon='fas trash' color="danger" onclick={ ()=> props.handleDelete(todo) } />
                </div>
            </li>
        ))
    }


    return (
        <ul className="responsive-table">
            <li className="table-header">
                <div className="clmn clmn-1">
                    Descrição
                </div>
                <div className="clmn clmn-2">
                   Ações
                </div>
            </li>
            { renderRows() }
        </ul>
    )
}