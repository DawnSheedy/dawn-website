import React from 'react';
import './../App.css'

const SocialLink = (props) => {
    let delay = props.delay
    return (<div class={"social-line "+props.className}>
        <div style={{animationDelay:Math.max(delay-100, 0)+"ms"}} className="vl"></div>
        <div style={{animationDelay:Math.max(delay-100, 0)+"ms"}} className="vl"></div>
        <span className="entry-anim social-span" style={{animationDelay: delay+"ms"}}><a href={props.link}>{props.text}</a></span> 
        {props.children}
    </div>);
}

export default SocialLink;