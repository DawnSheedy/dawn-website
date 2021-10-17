import React from 'react';
import './../App.css'

const CornerElement = (props) => {
    let classValue = "corner-element "+props.edge
    return (<div class={"entry-anim "+classValue}>
        <span class="corner-text">{props.content}{props.children}</span>
    </div>);
}

export default CornerElement;