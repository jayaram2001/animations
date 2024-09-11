import { findAnimationTimingFunction } from "../utils/cubic-bizer";

// 🛠️ Function to run an infinite vertical flip animation like a Sigma
// ⚙️ Parameters:
// - element: The DOM element to be animated
// - duration: The time (in ms) for a full flip
// - classNameList: List of classes to dynamically adjust the easing function
export function flipvertical(element, duration, classNameList) {

  // 💡 Defining keyframes for the vertical flip
  const keyframes = [
      { transform: 'rotateX(0deg)', offset: 0 },       // 📍 Start at 0° rotation (no flip)
      { transform: 'rotateX(360deg)', offset: 1 }      // 🔄 Complete 360° flip
  ];

  // 🎛️ Defining animation options
  const options = {
    duration: parseFloat(duration), // 🕒 Parse the provided duration into milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // 🎯 Dynamically generate easing
    fill: 'forwards', // 📌 Keeps the final flip state when animation ends
    iterations: Infinity // 🔁 Run this animation in an endless loop
  };

  // 🔥 Return the animation attached to the element
  return element.animate(keyframes, options);
}

// 🛠️ Function to run an infinite horizontal flip animation like a Sigma
// ⚙️ Parameters:
// - element: The DOM element to be animated
// - duration: The time (in ms) for a full flip
// - classNameList: List of classes to dynamically adjust the easing function
export function flip(element, duration, classNameList) {

  // 💡 Defining keyframes for the horizontal flip
  const keyframes = [
      { transform: 'rotateY(0deg)', offset: 0 },        // 📍 Start at 0° rotation (no flip)
      { transform: 'rotateY(360deg)', offset: 1 }      // 🔄 Complete a negative 360° rotation
  ];

  // 🎛️ Defining animation options
  const options = {
    duration: parseFloat(duration), // 🕒 Parse the provided duration into milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // 🎯 Dynamically generate easing
    fill: 'forwards', // 📌 Keeps the final flip state when animation ends
    iterations: Infinity // 🔁 Run this animation in an endless loop
  };

  // 🔥 Return the animation attached to the element
  return element.animate(keyframes, options);
}
