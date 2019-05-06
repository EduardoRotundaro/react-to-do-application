import React from 'react'

import Button from '../../../templates/elements/CircleButton'

export default props => {


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
            <li className="table-row">
                <div className="clmn clmn-1" data-label="Job Id"> 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 42235 </div>
                <div className="clmn clmn-2" data-label="Customer Name">
                    <Button icon='fas trash' color="danger" />
                    <Button icon='fas check' color="success" />
                    <Button icon='fas undo' color="warning" />
                </div>
            </li>
        </ul>
    )
}