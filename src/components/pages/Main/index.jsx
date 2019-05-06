import React, { Fragment } from 'react'

import Row from '../../layout/Row'
import Column from '../../layout/Column'

import List from './List'
import Form from './Form'

export default props => (
    <Fragment>
        <br/>
        <Row hAlign="center">
            <Form/>
        </Row>
        <Row hAlign="center">
            <Column>
                <List/>
            </Column>
        </Row>
    </Fragment>
)