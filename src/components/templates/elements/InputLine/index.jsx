import React from 'react';

export default props => (
    <div className="input-line">
        <input type="text" id="txt" required="required" onChange={ props.onchange } onKeyUp={ props.onkeyup } value={ props.value } />
        <label htmlFor="txt">{ props.label }</label>
        <div className="bar"></div>
    </div>
)