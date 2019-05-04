import React from 'react'
import { Aperture } from 'react-feather'

/********** PROPS **********

name -> cases on switch (*import from react-feather*)
size -> 24 || 48 ...
color -> '#ff0000' || 'red'

***************************/

export default props => {
    switch (props.name) {
        case 'aperture':
            return <Aperture size={ props.size } color={ props.color } />
        default:
            return null
    }
}