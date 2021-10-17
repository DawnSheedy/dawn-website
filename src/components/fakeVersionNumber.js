import React, { useEffect, useState } from 'react';
import './../App.css'

const FakeVersionNumber = (props) => {
    const [content, setContent] = useState(generateFakeVersionNumber())

    useEffect(() => {
      const interval = setInterval(() => {
        setContent(generateFakeVersionNumber())
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    })

    return (<>{content}</>);
}

function generateFakeVersionNumber() {
  return "v2."+generateRandomString(2)+"."+generateRandomString(4)
}

function generateRandomString(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
   }
   return result;
}

export default FakeVersionNumber;