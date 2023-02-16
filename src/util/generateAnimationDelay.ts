import cancelMotion from "./cancelMotion"
import { getRandomNumber } from "./randomNumberGen"

export const generateAnimationDelay = (min=0, max=1000) => {
    return { 'animationDelay': cancelMotion() ? `0ms` : `${getRandomNumber(min, max)}ms` }
}