import React from 'react'
import './../App.css'
import CornerElement from './cornerElement'
import FakeVersionNumber from './fakeVersionNumber';
import LoadingElementStatus from './loadingElementStatus';
import SocialLink from './socialLink';
import TimeStamp from './timeStamp';

const CornerElements = (props) => {
    return (<>
        <CornerElement edge="bl" content="bl_">
            <FakeVersionNumber />
        </CornerElement>
        <CornerElement edge="ur" content="">
            <LoadingElementStatus timeOut={4000} text="online" />
            <span>:net_stat</span>
        </CornerElement>
        <CornerElement edge="br" content="">
            <LoadingElementStatus timeOut={1500} pride={true} text="" />
            <span>:trns_prd</span>
        </CornerElement>
    </>);
}

export default CornerElements;