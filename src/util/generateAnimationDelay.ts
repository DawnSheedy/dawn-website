import { getRandomNumber } from "./randomNumberGen"

export const generateAnimationDelay = (min=0, max=1000) => {
    return { 'animationDelay': `${getRandomNumber(min, max)}ms` }
}