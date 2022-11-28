import React, { useState } from 'react';
import './../App.css'
import SocialLink from './socialLink';

const Socials = (props) => {
    const [show, setShow] = useState(false);
    const [firstShow, setFirst] = useState(true);

    function socialLinks() {
        if (show) {
            return (<>
            <SocialLink link="mailto:contact@dawnsheedy.com" text="Contact [Email]" delay={generateRandomDelay()} />
            <SocialLink link="https://www.linkedin.com/in/dawnshee" text="LinkedIn" delay={generateRandomDelay()} />
            <SocialLink link="https://github.com/dawnsheedy" text="GitHub" delay={generateRandomDelay()} />
            <SocialLink link="https://twitter.com/dawnshee_" text="Twitter" delay={generateRandomDelay()} />
            <SocialLink link="https://instagram.com/dawn.shee" text="Instagram" delay={generateRandomDelay()} />
            <SocialLink link={process.env.PUBLIC_URL + '/dawn-resume-2022.pdf' } text="Resumé" delay={generateRandomDelay()}>
                <div className="cursor"></div>
            </SocialLink>
            </>)
        } else {
            return (<></>)
        }
    }

    return (<div className={"social-link-container "+(firstShow?"":show?"open":"closed")}>
        <div className={"social-line "+props.className}>
            <div style={{animationDelay:(firstShow?"900ms":"0ms")}} className={"vl no-indent "+(firstShow?"":show?"expanded top":"collapsed top")}></div>
            <div style={{animationDelay:(firstShow?"900ms":"0ms")}} className={"vl no-indent "+(firstShow?"":show?"expanded":"collapsed")}></div>
            <span className="social-span no-indent entry-anim" style={{animationDelay:"500ms"}}><a href="#" onClick={() => {setShow(!show); setFirst(false)}}>{show?"collapse_social_info":"expand_social_info"}</a></span> 
            {!show?<div className="cursor"></div>:<></>}
        </div>
        {socialLinks()}
        </div>);
    
}

function generateRandomDelay() {
    return Math.random()*500;
}

export default Socials;