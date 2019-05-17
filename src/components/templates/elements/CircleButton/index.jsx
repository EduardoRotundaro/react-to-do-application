import React from 'react';

import Icon from '../../icons/FontAwesome';

export default props => (
    <button className={ `circle-btn circle-btn-${props.color}` } onClick={ props.onclick } >
        <Icon name={ props.icon } />
    </button>
)