import { findAnimationTimingFunction } from "../utils/cubic-bizer"; // Importing the utility function for retrieving the easing function

/**
 * Function to create and run the rubber band animation.
 * 
 * @param {HTMLElement} element - The HTML element to apply the animation on.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {Array} classNameList - An array of class names that help determine the easing function.
 * 
 * @returns {Animation} - Returns the animation object for further control if needed.
 */
export function rubberBand(element, duration, classNameList) {

    // Define keyframes for the rubber band animation, manipulating the 'scale3d' CSS property.
    // 'scale3d' scales the element in the x, y, and z directions (3D scaling).
    const keyframes = [
        { transform: 'scale3d(1, 1, 3)', offset: 0 },        // Initial normal state
        { transform: 'scale3d(1.25, 0.75, 3)', offset: 0.3 }, // Stretch horizontally at 30% progress
        { transform: 'scale3d(0.75, 1.25, 3)', offset: 0.5 }, // Stretch vertically at 50% progress
        { transform: 'scale3d(1.15, 0.85, 3)', offset: 0.7 }, // Slight horizontal stretch at 70% progress
        { transform: 'scale3d(0.95, 1.05, 3)', offset: 0.9 }, // Slight vertical stretch at 90% progress
        { transform: 'scale3d(1, 1, 3)', offset: 1 }         // Return to the normal state at 100% progress
    ];

    // Define animation options including duration, easing, and fill mode
    const options = {
        duration: parseFloat(duration), // Parse the input duration to a float for use in animation
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Retrieve the easing function and replace '/' with ',' to match CSS syntax
        fill: 'forwards' // Ensures the element keeps the final state of the animation after it completes
    };

    // Run the animation on the given element with the defined keyframes and options, returning the animation object
    return element.animate(keyframes, options);
}
