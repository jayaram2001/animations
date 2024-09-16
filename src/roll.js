import { findAnimationTimingFunction } from "../utils/cubic-bizer"; // Importing utility function for finding the easing function

/**
 * Function to perform the Roll In animation
 * 
 * @param {HTMLElement} element - The HTML element to animate
 * @param {string} duration - The duration of the animation in milliseconds
 * @param {Array} classNameList - List of class names to find the cubic-bezier easing function
 * 
 * @returns {Animation} - Returns the animation object for further control
 */
export function rollInAnimation(element, duration, classNameList) {
    const keyframes = [
        { 
            transform: 'translateX(-100%) rotate(-360deg)',  // Starts off-screen and rotated
            opacity: 0,                                      // Fully transparent
            offset: 0                                        // Start of animation
        },
        { 
            transform: 'translateX(0) rotate(0deg)',         // Element rolls into position
            opacity: 1,                                      // Fully visible
            offset: 1                                        // End of animation
        }
    ];

    const options = {
        duration: parseFloat(duration),                      // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards'                                    // Keeps the final state after animation completes
    };

    return element.animate(keyframes, options);
}

/**
 * Function to perform the Roll In animation
 * 
 * @param {HTMLElement} element - The HTML element to animate
 * @param {string} duration - The duration of the animation in milliseconds
 * @param {Array} classNameList - List of class names to find the cubic-bezier easing function
 * 
 * @returns {Animation} - Returns the animation object for further control
 */
export function rollOutAnimation(element, duration, classNameList) {
    const keyframes = [
        { 
            transform: 'translateX(0) rotate(0deg)',         // Element rolls into position
            opacity: 1,                                      // Fully transparent
            offset: 0                                        // Start of animation
        },
        { 
            transform: 'translateX(100vh) rotate(360deg)',  // Starts off-screen and rotated
            opacity: 0,                                      // Fully visible
            offset: 1                                        // End of animation
        }
    ];

    const options = {
        duration: parseFloat(duration),                      // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards'                                    // Keeps the final state after animation completes
    };

    return element.animate(keyframes, options);
}