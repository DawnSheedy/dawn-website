import React from 'react';
import './../App.css'

const Socials = (props) => {
    return (<div>
        <span className="entry-anim social-span" style={{animationDelay:"1300ms"}}><a href="https://github.com/dawnsheedy">GitHub</a></span>
        <span className="entry-anim social-span" style={{animationDelay:"1450ms"}}><a href="https://twitter.com/dawnshee_">Twitter</a></span>
        <span className="entry-anim social-span" style={{animationDelay:"1150ms"}}><a href="https://twitch.tv/dawnshee">Twitch</a></span>
        <span className="entry-anim social-span" style={{animationDelay:"1600ms"}}><a href="https://www.youtube.com/channel/UCsoFt8m8c9FWTb94m2gBEQA">Youtube</a></span>
    </div>);
}

export default Socials;