import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/********** PROPS **********

icon -> 'far angry' || 'fas plus' || 'fab react' ... (*Add on assets/js/fonts*)
size -> 'xs' || 'sm' || 'lg' || '2x' || '4x' ...
inverse -> true || false
rotate -> 90 || 180 ...
flip -> 'horizontal', 'vertical', 'both'
spin -> true || false
pulse -> true || false
border -> true || false

***************************/

export default props => (
    <FontAwesomeIcon icon={ props.name.split(' ') } size={ props.size }  rotation={ props.rotate } 
    flip={ props.flip } spin={ props.spin } pulse={ props.pulse } border={ props.border } />
)