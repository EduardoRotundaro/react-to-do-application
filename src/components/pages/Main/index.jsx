import React, { Fragment, Component } from 'react'

import Row from '../../layout/Row'
import Column from '../../layout/Column'

import List from './List'
import Form from './Form'

import connect from './connection'

class Main extends Component { 

    componentWillMount(){
        this.props.getAllToDoItens()
    }
    
    render(){
        return (
            <Fragment>
                <br/>
                <Row hAlign="center">
                    <Form description={ this.props.description } handleAdd={ this.props.addNewToDo } handleChange={ this.props.changeDescription } />
                </Row>
                <Row hAlign="center">
                    <Column>
                        <List list={ this.props.list } 
                            handleDelete={ this.props.deleteToDo } handleSetAsDone={ this.props.setAsDone } handleSetAsPending={ this.props.setAsPending } 
                        />
                    </Column>
                </Row>
            </Fragment>
        )
    }
}

export default connect(Main)