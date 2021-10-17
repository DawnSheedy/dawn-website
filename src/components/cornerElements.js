import React from 'react'
import './../App.css'
import CornerElement from './cornerElement'
import FakeVersionNumber from './fakeVersionNumber';
import LoadingElementStatus from './loadingElementStatus';
import SocialLink from './socialLink';
import TimeStamp from './timeStamp';

const CornerElements = (props) => {
    return (<>
        <CornerElement edge="ur" content="stat_">
            <FakeVersionNumber />
        </CornerElement>
        <CornerElement edge="br" content="dawn sheedy 2021" />
        <CornerElement edge="bl" content="net_state:">
            <LoadingElementStatus timeOut={2000} text="online" />
        </CornerElement>
    </>);
}

export default CornerElements;