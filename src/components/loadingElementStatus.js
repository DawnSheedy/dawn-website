import React, { useEffect, useState } from 'react';
import './../Loading.css'

const LoadingElementStatus = (props) => {
    let [content, setContent] = useState(1)
    let [done, isDone] = useState(false)

    useEffect(() => {
        let interval = setInterval(() => {
            setContent(content+1)
            if (content >= 3) {
                setContent(1)
            }
        }, 333)

        let timeOut = setTimeout(() => {
            isDone(true)
        }, props.timeOut)

        return () => {
            clearInterval(interval)
        }
    })

    if (done) {
        if (props.pride) {
            return(<span>[<span class="bluetext entry-anim">p</span><span class="pinktext entry-anim">r</span><span class="whitetext entry-anim">i</span><span class="pinktext entry-anim">d</span><span class="bluetext entry-anim">e</span>]</span>)
        }
        if (props.fail) {
            return (
                <span>[<span class="redtext entry-anim">error</span>]</span>
            )
        }
        return (
            <span>[<span class="greentext entry-anim">{props.text}</span>]</span>
        )
    } else {
        return (<span>[{getDots(content)}]</span>);
    }
    
}

function getDots(num) {
    let value = ""
    for (var i=0; i<num; i++) {
        value += "."
    }
    return value;
}

export default LoadingElementStatus;