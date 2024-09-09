// Function to create and run the animation
export function bounceinright(element, duration, classNameList)  {
    const keyframes = [
      { opacity: 0, transform: 'translateX(100%)', offset: 0 },
      { opacity: 1, transform: 'translateX(-10%)', offset: 0.6 },
      { transform: 'translateX(10%)', offset: 0.8 },
      { transform: 'translateX(0)', offset: 1 }
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: 'ease-out', // Easing function
      fill: 'forwards' // Keeps the final state of the animation
    };
  
    return element.animate(keyframes, options);
  }
  
export function bounceintop(element, duration, classNameList)  {
    const keyframes = [
        { opacity: 0, transform: 'translateY(100%)', offset: 0 },
        { opacity: 1, transform: 'translateY(-10%)', offset: 0.6 },
        { transform: 'translateY(10%)', offset: 0.8 },
        { transform: '(0)', offset: 1 }
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: 'ease-out', // Easing function
      fill: 'forwards' // Keeps the final state of the animation
    };
  
    return element.animate(keyframes, options);
  }

// Function to create and run the animation
export function bounceinleft(element, duration, classNameList)  {
    const keyframes = [
      { opacity: 0, transform: 'translateX(-100%)', offset: 0 },
      { opacity: 1, transform: 'translateX(10%)', offset: 0.6 },
      { transform: 'translateX(-10%)', offset: 0.8 },
      { transform: 'translateX(0)', offset: 1 }
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: 'ease-out', // Easing function
      fill: 'forwards' // Keeps the final state of the animation
    };
  
    return element.animate(keyframes, options);
  }
  
export function bounceinbottom(element, duration, classNameList)  {
    const keyframes = [
        { opacity: 0, transform: 'translateY(-100%)', offset: 0 },
        { opacity: 1, transform: 'translateY(10%)', offset: 0.6 },
        { transform: 'translateY(-10%)', offset: 0.8 },
        { transform: '(0)', offset: 1 }
    ];
  
    const options = {
      duration: parseFloat(duration), // Animation duration in milliseconds
      easing: 'ease-out', // Easing function
      fill: 'forwards' // Keeps the final state of the animation
    };
  
    return element.animate(keyframes, options);
  }