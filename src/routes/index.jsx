import React, { Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Main from '../components/pages/Main'
import About from '../components/pages/About'

export default props => (
    <Fragment>
        <Switch>
            <Route exact path="/" render={ () => <Redirect to="/to-dos"/> } />
            <Route path="/to-dos" component={ Main } />
            <Route path="/about" component={ About } />
            <Route render={ () => <Redirect to="/to-dos"/> } />
        </Switch>
    </Fragment>
)
