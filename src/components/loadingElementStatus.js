import React, { useEffect, useState } from 'react';
import './../Loading.css'

const LoadingElementStatus = (props) => {
    let [content, setContent] = useState(1)
    let [done, isDone] = useState(false)

    useEffect(() => {
        let interval = setInterval(() => {
            setContent(content + 1)
            if (content >= 3) {
                setContent(1)
            }
        }, 333)

        setTimeout(() => {
            isDone(true)
        }, props.timeOut)

        return () => {
            clearInterval(interval)
        }
    })

    if (done) {
        if (props.pride) {
            return (<span>[<span className="yellowtext entry-anim">n</span><span className="whitetext entry-anim">b</span><span className="purpletext entry-anim">n</span><span className="blacktext entry-anim">b</span>]</span>)
        }
        if (props.fail) {
            return (
                <span>[<span className="redtext entry-anim">error</span>]</span>
            )
        }
        return (
            <span>[<span className="greentext entry-anim">{props.text}</span>]</span>
        )
    } else {
        return (<span>[{getDots(content)}]</span>);
    }

}

function getDots(num) {
    let value = ""
    for (var i = 0; i < num; i++) {
        value += "."
    }
    return value;
}

export default LoadingElementStatus;