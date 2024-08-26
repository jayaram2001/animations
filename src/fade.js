const box = document.querySelector('.box');
let duration = 3000;
fadeIn(box, duration);
function fadeIn(element, duration) {
    //fade In
    console.log('inside');
    let opacity = 0;
    const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps

    function animate() {
        opacity += increment;
        element.style.opacity = opacity;

        if (opacity < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 1;
            // element.style.transform = "translateX(100%)"
        }
    }
    animate();
}