const element = document.querySelector('.box');
const ease = (t) => t < 0.5 ? (4 * t * t * t) : ((t - 1) * (2 * t - 2) * (2 * t - 2) + 1); // ease
const easeInQuad = (t) => t * t; // ease-in
const easeOutQuad = (t) => t * (2 - t); // ease-out
const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease-in-out

var duration = 3000;
var delay = 3000; // Delay of 3 second
fadeIn(element, duration, easeInOutQuad, delay);

function fadeIn(element, duration, timingFunction, delay) {
    if (timingFunction) {
        let startTime = null;
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;

            // Wait until the delay is passed before starting the animation
            if (elapsed < delay) {
                requestAnimationFrame(animate);
                return;
            }

            const adjustedElapsed = elapsed - delay;
            const progress = Math.min(adjustedElapsed / duration, 1); // Ensure progress doesn't exceed 1
            const easedProgress = timingFunction(progress); // Apply easing to the progress
            element.style.opacity = easedProgress;

            if (progress < 1) {
                requestAnimationFrame(animate); // Continue animating
            } else {
                element.style.opacity = 1; // Ensure it ends fully visible
            }
        }
        requestAnimationFrame(animate); // Start the animation
    } else {
        // Fade In linear timing animation when timing function is not given
        let opacity = 0;
        const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;

            // Wait until the delay is passed before starting the animation
            if (elapsed < delay) {
                requestAnimationFrame(animate);
                return;
            }

            const adjustedElapsed = elapsed - delay;
            opacity = Math.min(adjustedElapsed / duration, 1); // Calculate opacity based on elapsed time
            element.style.opacity = opacity;

            if (opacity < 1) {
                requestAnimationFrame(animate); // Continue animating
            } else {
                element.style.opacity = 1; // Ensure it ends fully visible
            }
        }
        requestAnimationFrame(animate); // Start the animation
    }
}

function fadeOut() {
    //fade Out
}