// Import necessary functions from the cubic-bizer module
import { generateOpacityValues } from "../utils/cubic-bizer";
import { extractCubicBezier } from "../utils/cubic-bizer";
import { findAnimationTimingFunction } from "../utils/cubic-bizer";
import { defaultAnimationTiming } from "../utils/animation-constant";

/**
 * Executes a smooth fade-out animation on a given DOM element.
 *
 * @param {HTMLElement} element - The target element to apply the fade-out animation.
 * @param {number} duration - Duration of the fade-out animation in milliseconds.
 * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.
 */
export function fadeout(element, duration, classNameList) {
    // Determine the appropriate animation timing function from the provided class names.
    let animationTimingFunction = findAnimationTimingFunction(classNameList);
    
    // Extract cubic-bezier control points, either from the class or a default configuration.
    let cubicBeizerTiming = animationTimingFunction.includes('cubic-bezier') 
        ? extractCubicBezier(animationTimingFunction) 
        : extractCubicBezier(defaultAnimationTiming[animationTimingFunction]);
    // Compute the interval duration by dividing the animation duration by the number of opacity steps (100).
    let interval = duration / 100;
    let index = 0;

    // Generate a sequence of opacity values based on the cubic-bezier control points over a standard duration (1000ms).
    var timing = generateOpacityValues(...cubicBeizerTiming, 1000);
    
    // Set the element's initial opacity to fully visible.
    element.style.opacity = 1;

    // Establish an interval that will gradually reduce the element's opacity.
    const intervalID = setInterval(() => {
        // Decrease the opacity based on the timing array value corresponding to the current index.
        element.style.opacity = parseFloat(element.style.opacity) - (timing[index] / 1);
        index += 1;
        
        // Terminate the interval if the opacity reaches or falls below a minimal threshold.
        if (element.style.opacity <= 0 || element.style.opacity <= 0.001) {
            clearInterval(intervalID);
        }
    }, interval);
};

/**
 * Executes a smooth fade-in animation on a given DOM element.
 *
 * @param {HTMLElement} element - The target element to apply the fade-in animation.
 * @param {number} duration - Duration of the fade-in animation in milliseconds.
 * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.
 */
export function fadeIn(element, duration, classNameList) {
    console.log("fadeIn");
    // Determine the appropriate animation timing function from the provided class names.
    let animationTimingFunction = findAnimationTimingFunction(classNameList);
    
    // Extract cubic-bezier control points, either from the class or a default configuration.
    let cubicBeizerTiming = animationTimingFunction.includes('cubic-bezier') 
        ? extractCubicBezier(animationTimingFunction) 
        : extractCubicBezier(defaultAnimationTiming[animationTimingFunction]);

    // Compute the interval duration by dividing the animation duration by the number of steps (100).
    let interval = duration / 100;
    let index = 0;

    // Generate a sequence of opacity values based on the cubic-bezier control points over a standard duration (1000ms).
    var timing = generateOpacityValues(...cubicBeizerTiming, 1000);
    
    // Set the element's initial opacity to fully transparent.
    element.style.opacity = 0;

    // Establish an interval that will gradually increase the element's opacity.
    const intervalID = setInterval(() => {
        // Increase the opacity based on the timing array value corresponding to the current index.
        element.style.opacity = parseFloat(element.style.opacity) + (timing[index] / 1);
        index += 1;
        
        // Terminate the interval when the opacity reaches or exceeds 1.
        if (index >= timing.length || element.style.opacity >= 1) {
            element.style.opacity = 1; // Ensure final opacity is exactly 1.
            clearInterval(intervalID);
        }
    }, interval);
};