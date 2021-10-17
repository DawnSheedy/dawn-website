import React from 'react'
import './../App.css'
import CornerElement from './cornerElement'
import FakeVersionNumber from './fakeVersionNumber';
import SocialLink from './socialLink';
import TimeStamp from './timeStamp';

const CornerElements = (props) => {
    return (<>
        <CornerElement edge="ur" content="ap_">
            <TimeStamp />
        </CornerElement>
        <CornerElement edge="bl" content="dawn sheedy 2021" />
    </>);
}

export default CornerElements;