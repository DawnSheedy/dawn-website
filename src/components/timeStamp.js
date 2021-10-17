import React, { useEffect, useState } from 'react';
import './../App.css'

const TimeStamp = (props) => {
    const [content, setContent] = useState(generateTimeStamp())

    useEffect(() => {
      const interval = setInterval(() => {
        setContent(generateTimeStamp())
      }, 500)

      return () => {
        clearInterval(interval)
      }
    })

    return (<>{content}</>);
}

function generateTimeStamp() {
  let date = new Date();
  return "local."+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds();
}

export default TimeStamp;