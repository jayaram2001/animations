import { findAnimationTimingFunction } from "../utils/cubic-bizer";

// Function to create and run a skew left animation
export function skewleft(element, duration, classNameList) {

    const keyframes = [
        { transform: 'skew(0deg, 0deg)', offset: 0 },   // Initial state (no skew)
        { transform: 'skew(20deg, 10deg)', offset: 0.5 },  // Skew to 20 degrees on X-axis, 10 degrees on Y-axis
        { transform: 'skew(0deg, 0deg)', offset: 1 }    // Return to original state
    ];

    const options = {
        duration: parseFloat(duration), // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards', // Keeps the final state of the animation
    };

  return element.animate(keyframes, options);
}

// Function to create and run a skew right animation
export function skewright(element, duration, classNameList) {

    const keyframes = [
        { transform: 'skew(0deg, 0deg)', offset: 0 },   // Initial state (no skew)
        { transform: 'skew(-20deg, -10deg)', offset: 0.5 },  // Skew to 20 degrees on X-axis, 10 degrees on Y-axis
        { transform: 'skew(0deg, 0deg)', offset: 1 }    // Return to original state
    ];

    const options = {
        duration: parseFloat(duration), // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards', // Keeps the final state of the animation
    };

  return element.animate(keyframes, options);
}

// Function to create and run a skew infinite animation
export function skewinfinite(element, duration, classNameList) {

    const keyframes = [
        { transform: 'skew(0deg, 0deg)', offset: 0 },   // Initial state (no skew)
        { transform: 'skew(20deg, 10deg)', offset: 0.25 },  // Skew to 20 degrees on X-axis, 10 degrees on Y-axis
        { transform: 'skew(0deg, 0deg)', offset: 0.5 },  // Skew to 20 degrees on X-axis, 10 degrees on Y-axis
        { transform: 'skew(-20deg, -10deg)', offset: 0.75 },  // Skew to 20 degrees on X-axis, 10 degrees on Y-axis
        { transform: 'skew(0deg, 0deg)', offset: 1 }    // Return to original state
    ];

    const options = {
        duration: parseFloat(duration), // Animation duration in milliseconds
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
        fill: 'forwards', // Keeps the final state of the animation
        iterations: Infinity, // Repeat the animation indefinitely
    };

  return element.animate(keyframes, options);
}