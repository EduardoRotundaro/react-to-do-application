import React from 'react'

import Icon from '../../../templates/icons/FontAwesome'

import { ABOUT } from '../../../../constants/content'

export default props => {

    const renderList = ()=>(
        ABOUT.social.map( (item, index) => (
            <a key={ `sm_${index}` } href={ item.link } rel="noopener noreferrer" target="_blank" >
                <i><Icon name={ item.icon } size="lg" /></i>
            </a>
        ))
    )

    return (
        <div className="effect varrius">
            <div className="buttons">
                { renderList() }
            </div>
        </div>
    )
}