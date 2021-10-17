import React from 'react';
import './../App.css'

const Title = (props) => {
    return (<div>
        <h1 className="App-headline"><span style={{animationDelay:"0ms"}} className="App-headline title-block entry-anim">Dawn</span><span style={{animationDelay:"150ms"}} className="App-headline title-block entry-anim">Sheedy</span></h1>
        <h1 className="App-subline"><span style={{animationDelay:"300ms"}} className="App-subline title-block entry-anim">(she/her)</span></h1>
        <span style={{animationDelay:"450ms"}} className="subtitle entry-anim">Software Engineer // Artist // Gamer</span>
        <span style={{animationDelay:"600ms"}} className="subtitle entry-anim">I make (and break) web apps.</span>
        <hr style={{animationDelay:"600ms"}} className="expand-anim"/>
    </div>);
}

export default Title;