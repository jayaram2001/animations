// Import necessary functions from the cubic-bizer module
import { generateOpacityValues } from "../utils/cubic-bizer";
import { extractCubicBezier } from "../utils/cubic-bizer";
import { findAnimationTimingFunction } from "../utils/cubic-bizer";
import { defaultAnimationTiming } from "../utils/animation-constant";

/**
 * Executes a smooth fade-out animation on a given DOM element.
 *
 * @param {HTMLElement} element - The target element to apply the fade-out animation.
 * @param {number} duration - Duration of the fade-out animation in milliseconds.
 * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.
 */
export function fadeout(element, duration, classNameList) {
    // Determine the appropriate animation timing function from the provided class names.
    let animationTimingFunction = findAnimationTimingFunction(classNameList);
    
    // Extract cubic-bezier control points, either from the class or a default configuration.
    let cubicBeizerTiming = animationTimingFunction.includes('cubic-bezier') 
        ? extractCubicBezier(animationTimingFunction) 
        : extractCubicBezier(defaultAnimationTiming[animationTimingFunction]);

    // Compute the interval duration by dividing the animation duration by the number of opacity steps (100).
    let interval = duration / 100;
    let index = 0;

    // Generate a sequence of opacity values based on the cubic-bezier control points over a standard duration (1000ms).
    var timing = generateOpacityValues(...cubicBeizerTiming, 1000);
    
    // Set the element's initial opacity to fully visible.
    element.style.opacity = 1;

    // Establish an interval that will gradually reduce the element's opacity.
    const intervalID = setInterval(() => {
        // Decrease the opacity based on the timing array value corresponding to the current index.
        element.style.opacity = parseFloat(element.style.opacity) - (timing[index] / 1);
        index += 1;
        
        // Terminate the interval if the opacity reaches or falls below a minimal threshold.
        if (element.style.opacity <= 0 || element.style.opacity <= 0.001) {
            clearInterval(intervalID);
        }
    }, intervel);
};


const animationType = timingFunction1('ease-in-out');
var duration = 3000;
var delay = 3000; // Delay of 3 second

function timingFunction1(animationType, p1x, p1y, p2x, p2y) {
    switch (animationType) {
        case 'ease':
            return (t) => t < 0.5 ? (4 * t * t * t) : ((t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
        case 'ease-in':
            return (t) => t * t;
        case 'ease-out':
            return (t) => t * (2 - t);
        case 'ease-in-out':
            return (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        case 'cubicBezier':
            return cubicBezier(0.5, p1x, p1y, p2x, p2y);
    }
}

function cubicBezier(t, p1x, p1y, p2x, p2y) {
    const cX = 3 * p1x,
        bX = 3 * (p2x - p1x) - cX,
        aX = 1 - cX - bX;

    const cY = 3 * p1y,
        bY = 3 * (p2y - p1y) - cY,
        aY = 1 - cY - bY;
};

const element = document.querySelector('[class^="oands-fadeIn"]');
// If the element exists, extract the duration from the class name
if (element) {
    // Extract the class name that includes the duration (e.g., "oands-fadeIn-3000")
    const className = element?.className;
    // Use a regular expression to find the duration value in the class name
    const durationMatch = className?.match(/oands-fadeIn-(\d+)/);
    var duration = durationMatch ? parseInt(durationMatch[1], 10) : 1000;
    fadeIn(element, duration);
}

function fadeIn(element, duration) {
    if(element && duration) {
        let opacity = 0;
        const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps
        function animate() {
            opacity += increment;
            element.style.opacity = opacity;

            if (opacity < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = 1;
            }
        }
        animate();
    }
    else {
        console.log("Please enter valid class name and duration");
    }
function extractCubicBizer(className){
    let cubicBeizerTiming = '';
    cubicBeizerTiming = className.replace('cubic-bezier' , '').replace('(' , '').replace(')' , '').split(',');
    return cubicBeizerTiming;
}
// function timingFunction1(animationType, p1x, p1y, p2x, p2y) {
//     switch (animationType) {
//         case 'ease':
//             return (t) => t < 0.5 ? (4 * t * t * t) : ((t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
//         case 'ease-in':
//             return (t) => t * t;
//         case 'ease-out':
//             return (t) => t * (2 - t);
//         case 'ease-in-out':
//             return (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//         case 'cubicBezier':
//             return cubicBezier(0.5, p1x, p1y, p2x, p2y);
//     }
// }

// function cubicBezier(t, p1x, p1y, p2x, p2y) {
//     const cX = 3 * p1x,
//         bX = 3 * (p2x - p1x) - cX,
//         aX = 1 - cX - bX;

//     const cY = 3 * p1y,
//         bY = 3 * (p2y - p1y) - cY,
//         aY = 1 - cY - bY;

//     const x = ((aX * t + bX) * t + cX) * t;
//     const y = ((aY * t + bY) * t + cY) * t;

//     return y;
// }
// fadeIn(element, duration, animationType, delay);

// function fadeIn(element, duration, timingFunction, delay) {
//     if (timingFunction) {
//         console.log('inisdde')
//         let startTime = null;
//         function animate(currentTime) {
//             if (!startTime) startTime = currentTime;
//             const elapsed = currentTime - startTime;

//             // Wait until the delay is passed before starting the animation
//             if (elapsed < delay) {
//                 requestAnimationFrame(animate);
//                 return;
//             }

//             const adjustedElapsed = elapsed - delay;
//             const progress = Math.min(adjustedElapsed / duration, 1); // Ensure progress doesn't exceed 1
//             const easedProgress = timingFunction(progress); // Apply easing to the progress
//             element.style.opacity = easedProgress;

//             if (progress < 1) {
//                 requestAnimationFrame(animate); // Continue animating
//             } else {
//                 element.style.opacity = 1; // Ensure it ends fully visible
//             }
//         }
//         requestAnimationFrame(animate); // Start the animation
//     } 
//     else {
//         //fade In linear timing animation when timing function nor delay is not given
//         let opacity = 0;
//         const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps
//         function animate() {
//             opacity += increment;
//             element.style.opacity = opacity;
    
//             if (opacity < 1) {
//                 requestAnimationFrame(animate);
//             } else {
//                 element.style.opacity = 1;
//             }
//         }
//         animate();
//     }
    // else {
    //     // Fade In linear timing animation when timing function is not given
    //     let opacity = 0;
    //     const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps

    //     function animate(currentTime) {
    //         if (!startTime) startTime = currentTime;
    //         const elapsed = currentTime - startTime;

    //         // Wait until the delay is passed before starting the animation
    //         if (elapsed < delay) {
    //             requestAnimationFrame(animate);
    //             return;
    //         }

    //         const adjustedElapsed = elapsed - delay;
    //         opacity = Math.min(adjustedElapsed / duration, 1); // Calculate opacity based on elapsed time
    //         element.style.opacity = opacity;

    //         if (opacity < 1) {
    //             requestAnimationFrame(animate); // Continue animating
    //         } else {
    //             element.style.opacity = 1; // Ensure it ends fully visible
    //         }
    //     }
    //     requestAnimationFrame(animate); // Start the animation
    // }

function findAnimationTimingFunction(classNameList) {
    let animatingTiming =  classNameList.find(className => {
        return defaultAnimationTiming.find(timing => {
            // Extract the key from the timing object and check if it matches the className
            return className.includes(Object.keys(timing)[0]);
        });
    });
    return animatingTiming ? animatingTiming : 'linear';
}

// const element = document.querySelector('.box');
// const ease = (t) => t < 0.5 ? (4 * t * t * t) : ((t - 1) * (2 * t - 2) * (2 * t - 2) + 1); // ease
// const easeInQuad = (t) => t * t; // ease-in
// const easeOutQuad = (t) => t * (2 - t); // ease-out
// const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease-in-out
// var duration = 3000;
// fadeIn(element, duration, easeInOutQuad);

// function fadeIn(element, duration, timingFunction) {
//     if(timingFunction) {
//         let startTime = null;
//         function animate(currentTime) {
//             if (!startTime) startTime = currentTime;
//             const elapsed = currentTime - startTime;
//             const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
//             const easedProgress = timingFunction(progress); // Apply easing to the progress
//             element.style.opacity = easedProgress;
//             if (progress < 1) {
//                 requestAnimationFrame(animate); // Continue animating
//             } else {
//                 element.style.opacity = 1; // Ensure it ends fully visible
//             }
//         }
//         requestAnimationFrame(animate); // Start the animation
//     }
//     else {
//         //fade In linear timing function when timing function is not given
//         let opacity = 0;
//         const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps
//         function animate() {
//             opacity += increment;
//             element.style.opacity = opacity;
    
//             if (opacity < 1) {
//                 requestAnimationFrame(animate);
//             } else {
//                 element.style.opacity = 1;
//             }
//         }
//         animate();
//     }
// }


// }
}
