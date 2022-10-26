import { isAbsolute } from "path";
import { reject } from "q";
import React, { useEffect, useRef, useState } from "react";
import { useRefOffset } from "../../effects/useRefOffset";
import { useSpring, animated, config } from 'react-spring'
import { positional } from "yargs";

type SlideBoxProps = {
    width: number;
    height: number;
    top: number;
    left: number;
    styles?: React.CSSProperties;
    delay?: number;
}

const SlideBox = ({ width, height, top, left, styles={}, delay=0 }: SlideBoxProps) => {
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started) {
            setStarted(true)
        }
    }, [started])

    const boundStyles: React.CSSProperties = {
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}px`,
        overflow: 'hidden'
    }

    const innerStylesWidthSpring = useSpring({ to: started ? { maxWidth: '100%' } : { maxWidth: '0%' }, config: config.stiff, delay: delay+0 })
    const innerStylesSlideSpring = useSpring({ to: started ? { left: `${width}px` } : { left: '0px' }, config: config.stiff, delay: delay+300 })


    const innerStyles: React.CSSProperties = {
        ...innerStylesWidthSpring as unknown as React.CSSProperties,
        ...innerStylesSlideSpring as unknown as React.CSSProperties,
        width: '100%',
        top: '0px',
        height: '100%',
        position: 'absolute',
        ...styles,
    }

    return <div style={boundStyles}>
        <animated.div style={innerStyles}></animated.div>
    </div>
}

export { SlideBox }