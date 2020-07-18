import React from 'react';
import './../App.css'

const Socials = (props) => {
    return (<div>
        <span className="entry-anim"><a href="">GitHub</a> | </span>
        <span className="entry-anim" style={{animationDelay:"150ms"}}><a href="">Twitter</a> | </span>
        <span className="entry-anim" style={{animationDelay:"300ms"}}><a href="">Twitch</a> | </span>
        <span className="entry-anim" style={{animationDelay:"450ms"}}><a href="">Youtube</a></span>
    </div>);
}

export default Socials;