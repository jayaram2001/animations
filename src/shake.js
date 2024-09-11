import { findAnimationTimingFunction } from "../utils/cubic-bizer";

// 🛠️ Function to run an infinite shake animation like a Sigma
// ⚙️ Parameters:
// - element: The DOM element to be shaken
// - duration: The time (in ms) for the animation
// - classNameList: List of classes to dynamically adjust the easing function
export function shake(element, duration, classNameList) {

  // 💡 Keyframes defining the back-and-forth shaking motion
  const keyframes = [
    { transform: 'rotate(0deg)', offset: 0 },       // 📍 Start at 0° (neutral)
    { transform: 'rotate(5deg)', offset: 0.25 },    // 🔄 Tilt right
    { transform: 'rotate(0deg)', offset: 0.5 },     // 📍 Back to neutral
    { transform: 'rotate(-5deg)', offset: 0.75 },   // 🔄 Tilt left
    { transform: 'rotate(0deg)', offset: 1 }        // 📍 Back to neutral
  ];

  // 🎛️ Options for controlling animation behavior
  const options = {
    duration: parseFloat(duration), // 🕒 Parse the provided duration into milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // 🎯 Dynamically generate easing
    fill: 'forwards', // 📌 Keeps the final state after the animation ends
    iterations: Infinity // 🔁 Shake infinitely
  };

  // 🔥 Return the animation attached to the element
  return element.animate(keyframes, options);
}

// 🛠️ Function to run an infinite horizontal shake animation like a Sigma
export function shakehorizontal(element, duration, classNameList) {

  // 💡 Keyframes defining the vertical shake motion
  const keyframes = [
    { transform: 'translateY(0%)', offset: 0 },      // 📍 Start at 0 (neutral)
    { transform: 'translateY(5%)', offset: 0.25 },   // 🔄 Move up slightly
    { transform: 'translateY(0%)', offset: 0.5 },    // 📍 Back to neutral
    { transform: 'translateY(-5%)', offset: 0.75 },  // 🔄 Move down slightly
    { transform: 'translateY(0%)', offset: 1 }       // 📍 Back to neutral
  ];

  // 🎛️ Animation options for the shake
  const options = {
    duration: parseFloat(duration), // 🕒 Parse the provided duration into milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // 🎯 Dynamically generate easing
    fill: 'forwards', // 📌 Keeps the final state after the animation ends
    iterations: Infinity // 🔁 Shake infinitely
  };

  // 🔥 Return the animation attached to the element
  return element.animate(keyframes, options);
}

// 🛠️ Function to run an infinite vertical shake animation like a Sigma
export function shakevertical(element, duration, classNameList) {

  // 💡 Keyframes defining the horizontal shake motion
  const keyframes = [
    { transform: 'translateX(0%)', offset: 0 },      // 📍 Start at 0 (neutral)
    { transform: 'translateX(5%)', offset: 0.25 },   // 🔄 Move right slightly
    { transform: 'translateX(0%)', offset: 0.5 },    // 📍 Back to neutral
    { transform: 'translateX(-5%)', offset: 0.75 },  // 🔄 Move left slightly
    { transform: 'translateX(0%)', offset: 1 }       // 📍 Back to neutral
  ];

  // 🎛️ Animation options for the shake
  const options = {
    duration: parseFloat(duration), // 🕒 Parse the provided duration into milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // 🎯 Dynamically generate easing
    fill: 'forwards', // 📌 Keeps the final state after the animation ends
    iterations: Infinity // 🔁 Shake infinitely
  };

  // 🔥 Return the animation attached to the element
  return element.animate(keyframes, options);
}

// 🛠️ Function to run an infinite wobble shake animation like a Sigma
export function shakewobble(element, duration, classNameList) {

  // 💡 Keyframes combining both translation and rotation for a wobble effect
  const keyframes = [
    { transform: 'translate(0, 0) rotate(0deg)', offset: 0 },     // 📍 Start at neutral position and rotation
    { transform: 'translate(5%, 5%) rotate(5deg)', offset: 0.25 },// 🔄 Move slightly and rotate right
    { transform: 'translate(0, 0) rotate(0deg)', offset: 0.5 },   // 📍 Back to neutral
    { transform: 'translate(-5%, 5%) rotate(-5deg)', offset: 0.75 }, // 🔄 Move slightly and rotate left
    { transform: 'translate(0, 0) rotate(0deg)', offset: 1 }      // 📍 Back to neutral
  ];

  // 🎛️ Animation options for the wobble shake
  const options = {
    duration: parseFloat(duration), // 🕒 Parse the provided duration into milliseconds
    easing: findAnimationTimingFunction(classNameList).replaceAll('/', ','), // 🎯 Dynamically generate easing
    fill: 'forwards', // 📌 Keeps the final state after the animation ends
    iterations: Infinity // 🔁 Wobble infinitely
  };

  // 🔥 Return the animation attached to the element
  return element.animate(keyframes, options);
}
