import React from 'react'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'

/********** PROPS **********

name -> 'bell' || 'diff-ignored' ...
size -> 'small' || 'medium' || 'large'
align -> 'middle' || 'top' || 'text-bottom' || 'text-top'
label -> 'any text'

***************************/

export default props => (
    <Octicon icon={ getIconByName( props.name ) } verticalAlign={ props.align } ariaLabel={ props.label } size={ props.size } />
)