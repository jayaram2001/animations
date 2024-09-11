import { findAnimationTimingFunction } from "../utils/cubic-bizer";

// Function to create and run an single 3d x-axis rotation animation
export function rotatex360to0(element, duration, classNameList) {

  const keyframes = [
    { transform: 'rotateX(0deg)', offset: 0 },        // Initial state, no rotation
    { transform: 'rotateX(360deg)', offset: 1 }       // Final state, full 360-degree rotation
  ];

  const options = {
    duration: parseFloat(duration), // Animation duration in milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
    fill: 'forwards', // Keeps the final state of the animation
  };

  return element.animate(keyframes, options);
}

// Function to create and run an single 3d x-axis reverse rotation animation
export function rotatex0to360(element, duration, classNameList) {

  const keyframes = [
    { transform: 'rotateX(360deg)', offset: 0 },        // Initial state, no rotation
    { transform: 'rotateX(0deg)', offset: 1 }       // Final state, full 360-degree rotation
  ];

  const options = {
    duration: parseFloat(duration), // Animation duration in milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
    fill: 'forwards', // Keeps the final state of the animation
  };

  return element.animate(keyframes, options);
}

// Function to create and run an single 3d x-axis reverse rotation animation
export function rotatey0to360(element, duration, classNameList) {

  const keyframes = [
    { transform: 'rotateY(360deg)', offset: 0 },        // Initial state, no rotation
    { transform: 'rotateY(0deg)', offset: 1 }       // Final state, full 360-degree rotation
  ];

  const options = {
    duration: parseFloat(duration), // Animation duration in milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
    fill: 'forwards', // Keeps the final state of the animation
  };

  return element.animate(keyframes, options);
}

// Function to create and run an single 3d x-axis rotation animation
export function rotatey360to0(element, duration, classNameList) {

    const keyframes = [
      { transform: 'rotateY(0deg)', offset: 0 },        // Initial state, no rotation
      { transform: 'rotateY(360deg)', offset: 1 }       // Final state, full 360-degree rotation
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
      fill: 'forwards', // Keeps the final state of the animation
    };
  
    return element.animate(keyframes, options);
}

// Function to create and run an single 3d x-axis rotation animation
export function rotateyinfinity(element, duration, classNameList) {

    const keyframes = [
      { transform: 'rotateY(0deg)', offset: 0 },        // Initial state, no rotation
      { transform: 'rotateY(360deg)', offset: 1 }       // Final state, full 360-degree rotation
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
      fill: 'forwards', // Keeps the final state of the animation
      iterations: 'Infinity', // Infinite loop
    };
  
    return element.animate(keyframes, options);
}

// Function to create and run an single 3d x-axis rotation animation
export function rotatexinfinity(element, duration, classNameList) {

    const keyframes = [
      { transform: 'rotateY(0deg)', offset: 0 },        // Initial state, no rotation
      { transform: 'rotateY(360deg)', offset: 1 }       // Final state, full 360-degree rotation
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // Easing function
      fill: 'forwards', // Keeps the final state of the animation
      iterations: 'Infinity', // Infinite loop
    };
  
    return element.animate(keyframes, options);
}