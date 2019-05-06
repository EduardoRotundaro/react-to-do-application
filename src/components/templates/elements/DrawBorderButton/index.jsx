import React from 'react'

import Icon from '../../icons/FontAwesome'

export default props => (
    <button className="btn-border draw-border">
        <Icon name={ props.icon } />
        &nbsp;&nbsp;{  props.children }
    </button>
)