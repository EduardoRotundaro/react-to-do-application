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
                <div className="clmn clmn-1 text-line task-done" data-label="Job Id">Criar uma aplicação React.</div>
                <div className="clmn clmn-2" data-label="Customer Name">
                    <Button icon='fas undo' color="warning" />
                    <Button icon='fas trash' color="danger" />
                </div>
            </li>
            <li className="table-row">
                <div className="clmn clmn-1 text-line" data-label="Job Id">Criar uma aplicação React de verdade.</div>
                <div className="clmn clmn-2" data-label="Customer Name">
                    <Button icon='fas check' color="success" />
                    <Button icon='fas trash' color="danger" />
                </div>
            </li>
            <li className="table-row">
                <div className="clmn clmn-1 text-line" data-label="Job Id">Criar uma aplicação React Native.</div>
                <div className="clmn clmn-2" data-label="Customer Name">
                    <Button icon='fas check' color="success" />
                    <Button icon='fas trash' color="danger" />
                </div>
            </li>
            <li className="table-row">
                <div className="clmn clmn-1 text-line" data-label="Job Id">Estudar Docker.</div>
                <div className="clmn clmn-2" data-label="Customer Name">
                    <Button icon='fas check' color="success" />
                    <Button icon='fas trash' color="danger" />
                </div>
            </li>
        </ul>
    )
}