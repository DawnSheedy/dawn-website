import React, { useState } from 'react';
import './../App.css'
import SocialLink from './socialLink';

const Socials = (props) => {
    const [show, setShow] = useState(false);

    if (show) {
        return (<div class="social-link-container open">
            <SocialLink link="mailto:contact@dawnsheedy.com" text="Contact" delay={generateRandomDelay()} />
            <SocialLink link="https://www.linkedin.com/in/dawnshee" text="LinkedIn" delay={generateRandomDelay()} />
            <SocialLink link="https://github.com/dawnsheedy" text="GitHub" delay={generateRandomDelay()} />
            <SocialLink link="https://twitter.com/dawnshee_" text="Twitter" delay={generateRandomDelay()} />
            <SocialLink link="https://instagram.com/dawn.shee" text="Instagram" delay={generateRandomDelay()} />
            <SocialLink link={process.env.PUBLIC_URL + '/resume-dawn-2021.pdf' } text="Resumé" delay={generateRandomDelay()} />
        </div>);
    } else {
        return (<div class="social-link-container closed">
            <div class={"social-line "+props.className}>
                <div style={{animationDelay:"900ms"}} className="vl"></div>
                <div style={{animationDelay:"900ms"}} className="vl"></div>
                <span className="entry-anim social-span" style={{animationDelay: "500ms"}}><a href="#" onClick={() => {setShow(true)}}>more_info</a></span> 
            </div>
        </div>)
    }
}

function generateRandomDelay() {
    return Math.random()*500;
}

export default Socials;