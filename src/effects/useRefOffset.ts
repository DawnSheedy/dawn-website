import { useEffect, useState } from "react";

type TargetBounds = {
    top: number;
    left: number;
    width: number;
    height: number;
}

const useRefOffset = (ref: React.RefObject<any>) => {
    const [bounds, setBounds] = useState<TargetBounds | null>(null)

    useEffect(() => {
        const resizeListener = () => {
            if (!ref.current) {
                return
            }
            const bounds = ref.current
            const top = bounds.offsetTop
            const left = bounds.offsetLeft
            const width = bounds.offsetWidth
            const height = bounds.offsetHeight

            setBounds({ top, left, width, height })
        }

        window.addEventListener('resize', resizeListener)

        resizeListener()

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [ref])

    return bounds
}

export { useRefOffset }