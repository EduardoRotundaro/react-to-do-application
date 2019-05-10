import React, { Fragment } from 'react'

import Column from '../../../layout/Column'

import Input from '../../../templates/elements/InputLine'
import Button from '../../../templates/elements/DrawBorderButton'

export default props =>{ 

    const keyHandler = (event)=>{
        if(event.key === 'Enter' ) props.handleAdd()
    }

    return (
        <Fragment>
            <Column sizes="12-10-10-10-10">
                <Input label="Adicione uma tarefa" value={ props.description } onchange={ props.handleChange } onkeyup={ keyHandler } />
            </Column>
            <Column sizes="12-2-2-2-2">
                <Button icon="fas plus" onclick={ props.handleAdd } >Adicionar</Button>
            </Column>
        </Fragment>
    )
}