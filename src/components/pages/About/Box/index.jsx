import React from 'react'

import logo from '../../../../assets/images/logo.png'

import { ABOUT } from '../../../../constants/content'

export default props => (
    <div className="box">
        <img src={logo} className="about-logo" alt=""/>
        <br/><br/>
        <h1>{ ABOUT.title }</h1>
        <p>{ ABOUT.description_pt1 }</p>
        <p>{ ABOUT.description_pt2 }</p>
    </div>
)