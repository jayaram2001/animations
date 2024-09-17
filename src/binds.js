import { findAnimationTimingFunction } from "../utils/cubic-bizer"; // Importing utility function for finding the easing function

/**
 * Function to perform the Blinds Up animation (close upwards)
 * 
 * @param {HTMLElement} element - The HTML element to animate
 * @param {string} duration - The duration of the animation in milliseconds
 * @param {Array} classNameList - List of class names to find the cubic-bezier easing function
 * 
 * @returns {Animation} - Returns the animation object for further control
 */
export function blindsUpAnimation(element, duration, classNameList) {
    const elementHeight = element.offsetHeight; // Get the element's current height

    const keyframes = [
        { 
            height: `${elementHeight}px`,  // Starts at full height
            opacity: 1,                    // Fully visible
            offset: 0                      // Start of animation
        },
        { 
            height: '0px',                 // Height reduces to 0
            opacity: 0,                    // Fully fades out
            offset: 1                      // End of animation
        }
    ];

    const options = {
        duration: parseFloat(duration),
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','),
        fill: 'forwards'
    };

    return element.animate(keyframes, options);
}


/**
 * Function to perform the Blinds Down animation (open downwards)
 * 
 * @param {HTMLElement} element - The HTML element to animate
 * @param {string} duration - The duration of the animation in milliseconds
 * @param {Array} classNameList - List of class names to find the cubic-bezier easing function
 * 
 * @returns {Animation} - Returns the animation object for further control
 */
export function blindsDownAnimation(element, duration, classNameList) {
    const elementHeight = element.scrollHeight; // Get the full height the element can expand to

    const keyframes = [
        { 
            height: '0px',                 // Starts at 0 height
            opacity: 0,                    // Fully transparent
            offset: 0                      // Start of animation
        },
        { 
            height: `${elementHeight}px`,  // Expands to full height
            opacity: 1,                    // Fully visible
            offset: 1                      // End of animation
        }
    ];

    const options = {
        duration: parseFloat(duration),
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','),
        fill: 'forwards'
    };

    return element.animate(keyframes, options);
}
