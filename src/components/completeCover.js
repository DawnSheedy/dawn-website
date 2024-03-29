import React, { useEffect } from 'react';
import './../Quads.css'

const CompleteCover = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.selector("home")
        }, props.delay+1000)
    }) 

    return (<>
        <div className="quad-base four" style={{animationDelay: props.delay+"ms"}}></div>
        <div className="quad-base three" style={{animationDelay: (props.delay+50)+"ms"}}></div>
        <div className="quad-base two" style={{animationDelay: (props.delay+100)+"ms"}}></div>
        <div className="quad-base one" style={{animationDelay: (props.delay+150)+"ms"}}></div>
    </>);
}

export default CompleteCover;