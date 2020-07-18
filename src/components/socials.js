import React from 'react';
import './../App.css'

const Socials = (props) => {
    return (<div>
        <span className="entry-anim"><a href="https://github.com/dawnsheedy">GitHub</a> | </span>
        <span className="entry-anim" style={{animationDelay:"150ms"}}><a href="https://twitter.com/dawnshee_">Twitter</a> | </span>
        <span className="entry-anim" style={{animationDelay:"300ms"}}><a href="https://twitch.tv/dawnshee">Twitch</a> | </span>
        <span className="entry-anim" style={{animationDelay:"450ms"}}><a href="https://www.youtube.com/channel/UCsoFt8m8c9FWTb94m2gBEQA">Youtube</a></span>
    </div>);
}

export default Socials;