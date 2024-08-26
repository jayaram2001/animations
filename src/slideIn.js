const element = document.querySelector('.slideIn');
var duration = 3000;
slideIn(element, duration);

function slideIn(element, duration) {
    let startTime = null;
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);
        const translateX = 100 - (easedProgress * 100);

        element.style.transform = `translateX(-${translateX}%)`;

        if (progress < 1) {
            requestAnimationFrame(animate); // Continue animating until it's in place
        } else {
            element.style.transform = `translateX(0%)`; // Ensure it ends at 0%
        }
    }

    requestAnimationFrame(animate); // Start the animation
}