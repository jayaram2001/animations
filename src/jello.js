import { findAnimationTimingFunction } from "../utils/cubic-bizer"; // Import cubic-bezier utility function

/**
 * Function to run the jello animation
 * 
 * @param {HTMLElement} element - The HTML element to animate
 * @param {string} duration - The duration of the animation in milliseconds
 * @param {Array} classNameList - List of class names to find the cubic-bezier easing function
 * 
 * @returns {Animation} - Returns the animation object for further control
 */
export function jelloAnimation(element, duration, classNameList) {
    // Defining the keyframes for the jello animation
    const keyframes = [
        { transform: 'none', offset: 0 },
        { transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.111 }, // 11.1%
        { transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.222 },   // 22.2%
        { transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.333 },// 33.3%
        { transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.444 },// 44.4%
        { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.555 }, // 55.5%
        { transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.666 }, // 66.6%
        { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.777 }, // 77.7%
        { transform: 'none', offset: 1 } // 100%
    ];

    // Animation options including duration and easing
    const options = {
        duration: parseFloat(duration),                 // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards'                               // Keep final state after animation
    };

    // Start the animation on the element
    return element.animate(keyframes, options);
}
