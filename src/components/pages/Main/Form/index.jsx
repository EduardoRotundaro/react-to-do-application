import React, { Fragment } from 'react'

import Column from '../../../layout/Column'

import Input from '../../../templates/elements/InputLine'
import Button from '../../../templates/elements/DrawBorderButton'

export default props => (
    <Fragment>
        <Column sizes="12-10-10-10-10">
            <Input label="Adicione uma tarefa" />
        </Column>
        <Column sizes="12-2-2-2-2">
            <Button icon="fas plus">Adicionar</Button>
        </Column>
    </Fragment>
)