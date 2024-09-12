import { findAnimationTimingFunction } from "../utils/cubic-bizer";

// Function to create and run the swing animation on a given element
export function swing(element, duration, classNameList) {
    // Define keyframes for the swing animation
    const keyframes = [
        { transform: 'rotate(0deg)', offset: 0 },      // Initial position at 0 degrees
        { transform: 'rotate(-30deg)', offset: 0.25 }, // Rotate to -30 degrees at 25% of the animation
        { transform: 'rotate(0deg)', offset: 0.5 },    // Return to 0 degrees at 50% of the animation
        { transform: 'rotate(30deg)', offset: 0.75 },  // Rotate to 30 degrees at 75% of the animation
    ];

    // Animation options
    const options = {
        duration: parseFloat(duration), // Convert duration to a number (milliseconds)
        easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Set custom easing function
        fill: 'forwards', // Maintain the final state after the animation completes
        iterations: Infinity, // Repeat the animation indefinitely
    };

    // Set the origin for rotation transformations
    element.style.transformOrigin = 'center -20px'; // Anchor point for rotation (center horizontally, -20px vertically)

    // Apply the animation to the element
    return element.animate(keyframes, options); // Return the animation object for further control
}
