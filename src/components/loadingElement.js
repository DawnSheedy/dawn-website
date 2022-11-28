import React from 'react';
import './../Loading.css'
import LoadingElementStatus from './loadingElementStatus';

const LoadingElement = (props) => {
    let delay = (props.index*100)+randomNumber(500);
    return (<div id={props.id} className="loading-element entry-anim" style={{animationDelay: delay+"ms"}}>
        <LoadingElementStatus fail={shouldFail()} text={props.statusText} timeOut={delay+1000+randomNumber(5000)} /><span>:{props.text}</span>
    </div>);
}

function randomNumber(max) {
    return (Math.random()*max)+1;
}

function shouldFail() {
    return (randomNumber(100) < 5)
}

export default LoadingElement;