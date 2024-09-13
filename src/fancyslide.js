import { findAnimationTimingFunction } from "../utils/cubic-bizer"; // Importing a utility function to get cubic-bezier easing based on class names

/**
 * Function to create and run the fancy slide animation with customizable duration and easing
 * 
 * @param {HTMLElement} element - The HTML element to animate
 * @param {string} duration - The duration of the animation in milliseconds
 * @param {Array} classNameList - List of class names used to find the cubic-bezier easing function
 * 
 * @returns {Animation} - Returns the animation object to allow for further control
 */
export function fancySlide(element, duration, classNameList) {
    
    // Getting the element's width in pixels and converting it to a number
    const elementWidth = parseFloat((element.style.width).replace('px', ''));
    
    // Defining the keyframes for the animation
    const keyframes = [
        { 
            transform: 'translateX(100%) skewX(10deg)', // Start off-screen with a skew
            opacity: 0,                                 // Element is initially transparent
            width: `${elementWidth * 5}px`,             // Width starts larger than the original
            offset: 0                                   // Start of animation
        },
        { 
            transform: 'translateX(0) skewX(0)',        // Element slides into its final position with no skew
            opacity: 1,                                 // Fully visible
            width: `${elementWidth}px`,                 // Width returns to the original size
            offset: 1                                   // End of animation
        }
    ];

    // Animation options including duration and easing
    const options = {
        duration: parseFloat(duration),                 // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function found using class names, replacing '/' with ','
        fill: 'forwards'                               // Keeps the final state after animation completes
    };

    // Runs the animation on the element using the defined keyframes and options
    return element.animate(keyframes, options);
}

/**
 * Function to create and run the fancy slide animation with customizable duration and easing
 * 
 * @param {HTMLElement} element - The HTML element to animate
 * @param {string} duration - The duration of the animation in milliseconds
 * @param {Array} classNameList - List of class names used to find the cubic-bezier easing function
 * 
 * @returns {Animation} - Returns the animation object to allow for further control
 */
export function fancySlideReverse(element, duration, classNameList) {
    
    // Getting the element's width in pixels and converting it to a number
    const elementWidth = parseFloat((element.style.width).replace('px', ''));
    
    // Defining the keyframes for the animation
    const keyframes = [
        { 
            transform: 'translateX(-100%) skewX(-10deg)', // Start off-screen with a skew
            opacity: 0,                                 // Element is initially transparent
            width: `${elementWidth * 5}px`,             // Width starts larger than the original
            offset: 0                                   // Start of animation
        },
        { 
            transform: 'translateX(0) skewX(0)',        // Element slides into its final position with no skew
            opacity: 1,                                 // Fully visible
            width: `${elementWidth}px`,                 // Width returns to the original size
            offset: 1                                   // End of animation
        }
    ];

    // Animation options including duration and easing
    const options = {
        duration: parseFloat(duration),                 // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function found using class names, replacing '/' with ','
        fill: 'forwards'                               // Keeps the final state after animation completes
    };

    // Runs the animation on the element using the defined keyframes and options
    return element.animate(keyframes, options);
}
