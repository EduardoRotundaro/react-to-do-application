import React from 'react'

import logo from '../../../../assets/images/logo.png'

import { ABOUT } from '../../../../constants/content'
import { APP_VESION } from '../../../../constants/app'

export default props => (
    <div className="box">
        <img src={logo} className="about-logo" alt=""/>
        <br/><br/>
        <h1>{ ABOUT.title }</h1>
        <p><small>{ `Versão ${APP_VESION} - Exemplo de uma aplicação CRUD feita com ` }<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>.</small></p>
        <p>{ ABOUT.description_pt1 }</p>
        <p>{ ABOUT.description_pt2 }</p>
    </div>
)