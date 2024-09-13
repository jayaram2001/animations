import { findAnimationTimingFunction } from "../utils/cubic-bizer"; // Importing utility function for finding the easing function

/**
 * Function to create and run the pulse animation.
 * 
 * @param {HTMLElement} element - The HTML element to apply the animation to.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {Array} classNameList - An array of class names to determine the easing function.
 * 
 * @returns {Animation} - Returns the animation object for further control if needed.
 */
export function pulse(element, duration, classNameList) {

    // Define keyframes for the pulse animation.
    // It scales the element and adjusts the opacity to create a "pulsing" effect.
    const keyframes = [
        { transform: 'scale(1)', opacity: 1, offset: 0 },       // Initial state: normal scale, full opacity
        { transform: 'scale(1.1)', opacity: 0.7, offset: 0.5 }, // At 50% progress: slight increase in scale, reduced opacity
        { transform: 'scale(1)', opacity: 1, offset: 1 }        // End state: return to normal scale, full opacity
    ];

    // Define the animation options, including duration, easing, and fill behavior.
    const options = {
        duration: parseFloat(duration), // Converts the input duration to a float and sets it as the animation's duration
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Retrieves the easing function based on classNameList and adjusts its format for CSS
        fill: 'forwards' // Keeps the element in the final animated state after the animation ends
    };

    // Apply the animation to the provided element using the defined keyframes and options, and return the animation object
    return element.animate(keyframes, options);
}
