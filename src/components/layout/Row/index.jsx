import React from 'react'

export default props => {

    function classNames(){
        let classes = `row`
        if(props.vAlign) classes += ` align-items-${props.vAlign}`
        if(props.hAlign) classes += ` justify-content-${props.hAlign}`
        if(props.className) classes += ` ${props.className}`

        return classes
    }

    return (
        <div className={ classNames() } >
            { props.children }
        </div>
    )
}