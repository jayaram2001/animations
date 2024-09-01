// Import the generateOpacityValues function from the cubic-bizer module
import { generateOpacityValues } from "./cubic-bizer";

// Define default animation timing functions as an array of objects
// Each object represents a different timing function for CSS animations
let defaultAnimationTiming = [
    {'ease-in': 'cubic-bezier(0.42, 0, 1, 1)'},
    {'ease-out': 'cubic-bezier(0, 0, 0.58, 1)'},
    {'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)'},
    {'linear': 'cubic-bezier(0, 0, 1, 1)'},
    {'step-start': 'steps(1, start)'},
    {'step-end': 'steps(1, end)'},
    {'cubic-bezier' : ''},
];

// Function to perform a fadeout animation on a given element
// Parameters:
// - element: The DOM element to be faded out
// - duration: The duration of the fadeout animation in milliseconds
// - classNameList: A list of class names that may contain animation timing functions
export function fadeout(element, duration, classNameList) {
    // Find the appropriate animation timing function based on the class names provided
    let animationTimingFunction = findAnimationTimingFunction(classNameList);
    console.log(animationTimingFunction , extractCubicBizer(animationTimingFunction))
    let cubicBeizerTiming = animationTimingFunction.includes('cubic-bezier') ?  extractCubicBizer(animationTimingFunction) : extractCubicBizer(defaultAnimationTiming.animationTimingFunction);
    // Generate opacity values for the fadeout animation using cubic-bezier control points
    var timing = generateOpacityValues(...cubicBeizerTiming , 1000);
    // Set the initial opacity of the element to fully visible (1)
    element.style.opacity = 1;
    // Calculate the interval duration based on the total duration and the number of opacity steps (100)
    let intervel = duration / 100;
    let index = 0;

    // Create an interval to gradually decrease the opacity of the element
    const intervalID = setInterval(() => {
        // Decrease the element's opacity by the corresponding value from the timing array
        element.style.opacity = parseFloat(element.style.opacity) - (timing[index] / 1);
        console.log(element.style.opacity , timing[index] , element.style.opacity- timing[index] );
        index = index + 1;
        // If the element's opacity reaches or drops below 0, clear the interval to stop the animation
        if (element.style.opacity <= 0) {
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
