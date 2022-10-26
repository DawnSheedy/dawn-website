import { isAbsolute } from "path";
import { reject } from "q";
import React, { useEffect, useRef, useState } from "react";
import { useRefOffset } from "../../effects/useRefOffset";
import { SlideBox } from "./SlideBox";

type EntryBoxProps = {
    delay?: number;
    children?: JSX.Element | JSX.Element[];
}

const EntryBox = ({ delay, children }: EntryBoxProps) => {
    const boundsRef = useRef<HTMLDivElement>()
    const bounds = useRefOffset(boundsRef)

    return <div ref={boundsRef as React.RefObject<HTMLDivElement>}>
        {bounds !== null && <SlideBox { ...bounds } styles={{ borderTop: '1px solid white', borderBottom: '1px solid white', height: 'calc(100% - 2px)' }} />}
        {bounds !== null && <SlideBox { ...bounds } styles={{ backgroundColor: 'white' }} delay={100} />}
        {children}
    </div>
}

export { EntryBox }