import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../../icons/FontAwesome'
import logo from '../../../../assets/images/logo.png'

export default props => {

    function renderItens(){
        let itens = props.itens || []

        return itens.map(
            (item, index) => 
                <li key={ `item_${index}` } className="menu-item">
                    <Link to={ item.to } className="menu-link">
                        <Icon name={ item.icon } />&nbsp;&nbsp;{ item.name }
                    </Link>
                </li>
        )
    }

    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="menu-corner">
                    <img className="menu-logo" src={ logo } alt=""/>
                </li>
                { renderItens() }
                <li className="menu-corner"></li>
            </ul>
        </nav>         
    )
}