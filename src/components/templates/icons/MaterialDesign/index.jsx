import React from 'react'
import MaterialIcon from 'material-icons-react'

/********** PROPS **********

name -> 'commute', 'account_circle' ...
size ->  'tiny' || 'small' || 'medium' || 'large' || 24 || 48 ...
color -> '#ff0000' || 'red'

***************************/

export default props => (
    <MaterialIcon icon={ props.name } size={ props.size }  color={ props.color }  />
)