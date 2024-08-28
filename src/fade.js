import { generateOpacityValues } from "./cubic-bizer";

export function fadeout(element , duration) {
    let timing  = generateOpacityValues(0.000, 1.330, 1.000, 0.025);
    console.log(timing[90])
    element.style.opacity = 1;
    let intervel = duration/100;    
    let index = 0;
    const intervalID =  setInterval(() => {
        index += 1;
        element.style.opacity = parseFloat(element.style.opacity) - timing[index];
        if(element.style.opacity <= 0){
            clearInterval(intervalID)
        }    
    },intervel)
};


const element = document.querySelector('.box');
const ease = (t) => t < 0.5 ? (4 * t * t * t) : ((t - 1) * (2 * t - 2) * (2 * t - 2) + 1); // ease
const easeInQuad = (t) => t * t; // ease-in
const easeOutQuad = (t) => t * (2 - t); // ease-out
const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease-in-out
var duration = 3000;
fadeIn(element, duration, easeInOutQuad);

function fadeIn(element, duration, timingFunction) {
    if(timingFunction) {
        let startTime = null;
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
            const easedProgress = timingFunction(progress); // Apply easing to the progress
            element.style.opacity = easedProgress;
            if (progress < 1) {
                requestAnimationFrame(animate); // Continue animating
            } else {
                element.style.opacity = 1; // Ensure it ends fully visible
            }
        }
        requestAnimationFrame(animate); // Start the animation
    }
    else {
        //fade In linear timing function when timing function is not given
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
}


