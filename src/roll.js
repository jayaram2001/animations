import { findAnimationTimingFunction } from "../utils/cubic-bizer"; // Importing utility function for finding the easing function

export function rollin(element, duration, classNameList) {
    const keyframes = [
        { transform: 'translateX(-100%) rotate(-120deg)', opacity: 0, offset: 0 },  // Start off-screen, rotated
        { transform: 'translateX(0) rotate(0deg)', opacity: 1, offset: 1 }          // End in place with no rotation
    ];

    const options = {
        duration: duration,          // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards'             // Keep the final state after the animation
    };

    return element.animate(keyframes, options);
}

export function rollout(element, duration, classNameList) {
    const keyframes = [
        { transform: 'translateX(0) rotate(0deg)', opacity: 1, offset: 0 },   // Start in place, fully visible
        { transform: 'translateX(100%) rotate(120deg)', opacity: 0, offset: 1 }  // Roll out and move off-screen
    ];

    const options = {
        duration: duration,          // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards'             // Keep the final state after the animation
    };

    return element.animate(keyframes, options);
}