import React, { Fragment, Component } from 'react'

import Row from '../../layout/Row'
import Column from '../../layout/Column'

import List from './List'
import Form from './Form'

export default class Main extends Component { 
    
    render(){
        return (
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
    }
}