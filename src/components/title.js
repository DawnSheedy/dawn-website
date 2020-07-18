import React from 'react';
import './../App.css'

const Title = (props) => {
    return (<div>
        <h1 style={{animationDelay:"0ms"}} className="App-headline entry-anim">Dawn Sheedy</h1>
        <h5 style={{animationDelay:"150ms"}} className="entry-anim">I make (and break) web apps.</h5>
        <hr style={{animationDelay:"300ms"}} className="entry-anim"/>
    </div>);
}

export default Title;