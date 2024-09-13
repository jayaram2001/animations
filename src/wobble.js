import { findAnimationTimingFunction } from "../utils/cubic-bizer";

// Function to create and run an wobble animation
export function wobble(element, duration, classNameList) {

  const keyframes = [
    { transform: 'none', offset: 0 },        // Initial state, no rotation
    { transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.15 },        // Initial state, no rotation
    { transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.3 },        // Initial state, no rotation
    { transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45 },        // Initial state, no rotation
    { transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6 },        // Initial state, no rotation
    { transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75 },        // Initial state, no rotation
    { transform: 'none', offset: 1 },        // Initial state, no rotation
  ];

  const options = {
    duration: parseFloat(duration), // Animation duration in milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
    fill: 'forwards', // Keeps the final state of the animation
  };

  return element.animate(keyframes, options);
}