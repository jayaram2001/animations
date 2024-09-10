// Function to create and run the scaleout animation
export function scaleout(element, duration, classNameList)  {
    const keyframes = [
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(1.1)', offset: 1 }
    ];
  
    const options = {
        duration: parseFloat(duration), // Animation duration in milliseconds
        easing: 'ease-in', // Easing function
        fill: 'forwards' // Keeps the final state of the animation
    };
  
    return element.animate(keyframes, options);
}

// Function to create and run the scalein animation
export function scalein(element, duration, classNameList)  {
    const keyframes = [
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(0.9)', offset: 1 }
    ];
  
    const options = {
        duration: parseFloat(duration), // Animation duration in milliseconds
        easing: 'ease-in', // Easing function
        fill: 'forwards' // Keeps the final state of the animation
    };
  
    return element.animate(keyframes, options);
}

// Function to create and run the scaleininfinite animation
export function scaleininfinite(element, duration, classNameList)  {
    const keyframes = [
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(0.9)', offset: 1 }
    ];
  
    const options = {
        duration: parseFloat(duration), // Animation duration in milliseconds
        easing: 'ease-in', // Easing function
        fill: 'forwards', // Keeps the final state of the animation
        iterations: 'Infinity', // Infinite loop
        direction: 'alternate' // Plays forward and then backward for a smooth loop
    };
  
    return element.animate(keyframes, options);
}

// Function to create and run the scaleoutinfinite animation
export function scaleoutinfinite(element, duration, classNameList)  {
    const keyframes = [
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(1.1)', offset: 1 }
    ];
  
    const options = {
        duration: parseFloat(duration), // Animation duration in milliseconds
        easing: 'ease-in', // Easing function
        fill: 'forwards', // Keeps the final state of the animation
        iterations: 'Infinity', // Infinite loop
        direction: 'alternate' // Plays forward and then backward for a smooth loop
    };
  
    return element.animate(keyframes, options);
}