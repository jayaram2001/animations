document.addEventListener('DOMContentLoaded', () => {
let elements = document.getElementsByClassName('oands');
fadeOut(elements[0] , 1000);
function fadeOut(element , duration) {
    element.style.opacity = 0;
    intervel = duration/100;    
    const intervalID =  setInterval(() => {
        console.log(element.style.opacity)
        element.style.opacity = parseFloat(element.style.opacity) + 0.01;
        if(element.style.opacity >= 1){
            clearInterval(intervalID)
        }    
        console.log(intervel);
    },intervel)
}
})