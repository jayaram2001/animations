// Define default animation timing functions as an array of objects
// Each object represents a different timing function for CSS animations
export let defaultAnimationTiming = {
    'ease-in': 'cubic-bezier(0.42, 0, 1, 1)' ,
    'ease-out': 'cubic-bezier(0, 0, 0.58, 1)' ,
    'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
    'linear': 'cubic-bezier(0, 0, 1, 1)',
    'step-start': 'steps(1, start)',
    'cubic-bezier' : ''
};
