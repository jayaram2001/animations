// Import necessary functions from the cubic-bezier module
import { generateOpacityValues } from "../utils/cubic-bizer";
import { extractCubicBezier } from "../utils/cubic-bizer";
import { findAnimationTimingFunction } from "../utils/cubic-bizer";
import { defaultAnimationTiming } from "../utils/animation-constant";

/**
 * Executes a smooth slide-in animation on a given DOM element from the left.
 *
 * @param {HTMLElement} element - The target element to apply the slide-in animation.
 * @param {number} duration - Duration of the slide-in animation in milliseconds.
 * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.
 * @param {number} startPosition - The starting position in pixels or percentage.
 * @param {number} endPosition - The end position in pixels or percentage (typically 0).
 */
export function slidein(element, duration, classNameList) {
    // Determine the appropriate animation timing function from the provided class names.
    let animationTimingFunction = findAnimationTimingFunction(classNameList);
    
    // Extract cubic-bezier control points, either from the class or a default configuration.
    let cubicBeizerTiming = animationTimingFunction.includes('cubic-bezier') 
        ? extractCubicBezier(animationTimingFunction) 
        : extractCubicBezier(defaultAnimationTiming[animationTimingFunction]);

    // Compute the interval duration by dividing the animation duration by the number of steps (100).
    let interval = duration / 100;
    let index = 0;

    // Generate a sequence of values for the slide effect based on the cubic-bezier control points.
    let timing = generateOpacityValues(...cubicBeizerTiming, 1000);
    const sum = timing.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const scaledArray = timing.map(value => (value / sum) * 100);

    // Set the element's initial position.
    element.style.left = '-100%';

    // Establish an interval that will gradually change the element's position.
    const intervalID = setInterval(() => {
        // Compute the new position based on the timing array value corresponding to the current index.
        let currentPos = parseFloat(element.style.left);
        element.style.left = parseFloat((element.style.left).replace('%' , '')) + `${scaledArray[index] * 100}` + '%' ;
        console.log(timing);
        index +=1;
        // Terminate the interval if the element reaches the end position.
        if (index >= 100) {
            element.style.left = `${endPosition}px`;
            clearInterval(intervalID);
        }
    }, interval);
};
