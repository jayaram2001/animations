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
 */
export function slidein(element, duration, classNameList) {
    // Determine the appropriate animation timing function from the provided class names.
    let animationTimingFunction = findAnimationTimingFunction(classNameList);
    
    // Extract cubic-bezier control points, either from the class or a default configuration.
    let cubicBezierTiming = animationTimingFunction.includes('cubic-bezier') 
        ? extractCubicBezier(animationTimingFunction) 
        : extractCubicBezier(defaultAnimationTiming[animationTimingFunction]);

    // Compute the interval duration by dividing the animation duration by the number of steps (100).
    let interval = duration / 100;

    //Initialize set interal index. 
    let index = 0;
    
    // Set the initial opacity of the element to 0.
    element.style.opacity = 0;

    // Generate a sequence of opacity values for the slide effect based on the cubic-bezier control points.
    let timing = generateOpacityValues(...cubicBezierTiming, 1000);

    // Set the element's initial position off-screen to the left.
    element.style.transform = "translateX(-100%)";

    //Initialize temprory value used to add and hold all previous values
    let oldValue = 0;

    // Establish an interval that will gradually change the element's position and opacity.
    const intervalID = setInterval(() => {
        // Compute the new position based on the timing array value corresponding to the current index.
        oldValue += timing[index];

        // Incrementally increase the opacity of the element.
        element.style.opacity = parseFloat(element.style.opacity) + (timing[index] / 1);

        // Move the element closer to its final position.
        element.style.transform = `translateX(${(oldValue * 100) - 100}%)`;

        // Move to the next timing value , Increment index value.
        index += 1;

        // Terminate the interval if the element reaches the end position.
        if (index >= 100) {
            clearInterval(intervalID);
        }
    }, interval);
}

/**
 * Executes a smooth slide-in animation on a given DOM element from the left.
 *
 * @param {HTMLElement} element - The target element to apply the slide-in animation.
 * @param {number} duration - Duration of the slide-in animation in milliseconds.
 * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.
 */
export function slideout(element, duration, classNameList) {
    // Determine the appropriate animation timing function from the provided class names.
    let animationTimingFunction = findAnimationTimingFunction(classNameList);
    
    // Extract cubic-bezier control points, either from the class or a default configuration.
    let cubicBezierTiming = animationTimingFunction.includes('cubic-bezier') 
        ? extractCubicBezier(animationTimingFunction) 
        : extractCubicBezier(defaultAnimationTiming[animationTimingFunction]);

    // Compute the interval duration by dividing the animation duration by the number of steps (100).
    let interval = duration / 100;

    //Initialize set interal index. 
    let index = 0;
    
    // Set the initial opacity of the element to 0.
    element.style.opacity = 1;

    // Generate a sequence of opacity values for the slide effect based on the cubic-bezier control points.
    let timing = generateOpacityValues(...cubicBezierTiming, 1000);

    // Set the element's initial position off-screen to the left.
    element.style.transform = "translateX(0%)";
    
    //Initialize temprory value used to add and hold all previous values
    let oldValue = 0;

    // Establish an interval that will gradually change the element's position and opacity.
    const intervalID = setInterval(() => {
        // Compute the new position based on the timing array value corresponding to the current index.
        oldValue += timing[index];

        // Incrementally increase the opacity of the element.
        element.style.opacity = parseFloat(element.style.opacity) - (timing[index] / 1);

        // Move the element closer to its final position.
        element.style.transform = `translateX(${(oldValue * 100) }%)`;

        // Move to the next timing value , Increment index value.
        index += 1;

        // Terminate the interval if the element reaches the end position.
        if (index >= 100) {
            clearInterval(intervalID);
        }
    }, interval);
}
