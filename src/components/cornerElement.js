import React from 'react';
import './../App.css'

const CornerElement = (props) => {
    let classValue = "corner-element "+props.edge
    return (<div className={"entry-anim "+classValue}>
        <span className="corner-text">{props.content}{props.children}</span>
    </div>);
}

export default CornerElement;