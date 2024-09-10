import { findAnimationTimingFunction } from "../utils/cubic-bizer";

// Function to create and run an infinite rotation animation
export function rotateright(element, duration, classNameList) {

  const keyframes = [
    { transform: 'rotate(0deg)', offset: 0 },        // Initial state, no rotation
    { transform: 'rotate(360deg)', offset: 1 }       // Final state, full 360-degree rotation
  ];

  const options = {
    duration: parseFloat(duration), // Animation duration in milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
    fill: 'forwards', // Keeps the final state of the animation
    iterations: Infinity // Infinite looping of the animation
  };

  return element.animate(keyframes, options);
}

export function rotateleft(element, duration, classNameList) {

    const keyframes = [
      { transform: 'rotate(0deg)', offset: 0 },        // Initial state, no rotation
      { transform: 'rotate(-360deg)', offset: 1 }       // Final state, full 360-degree rotation
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
      fill: 'forwards', // Keeps the final state of the animation
      iterations: Infinity // Infinite looping of the animation
    };
  
    return element.animate(keyframes, options);
  }
  