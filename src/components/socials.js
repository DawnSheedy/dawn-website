import React from 'react';
import './../App.css'

const Socials = (props) => {
    return (<div>
        <span className="entry-anim social-span" style={{animationDelay:"1000ms"}}><a href="mailto:contact@dawnsheedy.com">Contact</a></span>
        <div style={{animationDelay:"2500ms"}} className="vl"></div>
        <span className="entry-anim social-span" style={{animationDelay:"1200ms"}}><a href={process.env.PUBLIC_URL + '/resume-dawn-2021.pdf' }>Resumé</a></span>
        <div style={{animationDelay:"2500ms"}} className="vl"></div>
        <span className="entry-anim social-span" style={{animationDelay:"1400ms"}}><a href="https://github.com/dawnsheedy">GitHub</a></span>
        <div style={{animationDelay:"2500ms"}} className="vl"></div>
        <span className="entry-anim social-span" style={{animationDelay:"1600ms"}}><a href="https://www.instagram.com/dawn.shee/">Instagram</a></span>
        <div style={{animationDelay:"2500ms"}} className="vl"></div>
        <span className="entry-anim social-span" style={{animationDelay:"1800ms"}}><a href="https://www.linkedin.com/in/dawn-sheedy-a641b780/">LinkedIn</a></span>
    </div>);
}

export default Socials;