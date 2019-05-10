import React, { Fragment, Component } from 'react'
import axios from 'axios'

import Row from '../../layout/Row'
import Column from '../../layout/Column'

import List from './List'
import Form from './Form'

import { API_CONNECTION } from '../../../constants/app'

export default class Main extends Component { 

    refresh(){
        axios.get(API_CONNECTION)
        .then( (resp)=>{
            this.setState( { ...this.state, description: '', list: resp.data.data })
        })

    }

    handleAdd(){
        const description = this.state.description
        
        axios.post(`${API_CONNECTION}new`, { description } )
        .then((resp)=>{
            this.refresh()
        })
        .catch((err)=>{
            alert(err.message)
        })

    }

    handleChange(event){
        this.setState( { ...this.state, description:  event.target.value } ) 
    }

    handleDelete(todo){
        axios.delete(`${API_CONNECTION}remove/${todo._id}`)
        .then((resp)=>{
            this.refresh()
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    handleSetAsDone(todo){
        axios.put(`${API_CONNECTION}set-as-done/${todo._id}`)
        .then((resp)=>{
            this.refresh()
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    handleSetAsPending(todo){
        axios.put(`${API_CONNECTION}set-as-pending/${todo._id}`)
        .then((resp)=>{
            this.refresh()
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    constructor(props){
        super(props)

        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSetAsDone = this.handleSetAsDone.bind(this)
        this.handleSetAsPending = this.handleSetAsPending.bind(this)

        this.refresh()
    }
    
    render(){
        return (
            <Fragment>
                <br/>
                <Row hAlign="center">
                    <Form description={ this.state.description } handleAdd={ this.handleAdd } handleChange={ this.handleChange } />
                </Row>
                <Row hAlign="center">
                    <Column>
                        <List list={ this.state.list } handleDelete={ this.handleDelete } handleSetAsDone={ this.handleSetAsDone } handleSetAsPending={ this.handleSetAsPending } />
                    </Column>
                </Row>
            </Fragment>
        )
    }
}