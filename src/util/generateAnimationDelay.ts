import { cancelMotion } from "./cancelMotion"
import { getRandomNumber } from "./randomNumberGen"

/**
 * Generate a random animation delay (if motion enabled)
 * @param min 
 * @param max 
 * @returns 
 */
export const generateAnimationDelay = (min=0, max=1000) => {
    return { 'animationDelay': cancelMotion() ? `0ms` : `${getRandomNumber(min, max)}ms` }
}