import { fadeIn } from '../src/fade';

document.addEventListener('DOMContentLoaded', () => {
  const animations = {
    fadeIn
  };
  fadeIn('hello');
  // Function to get all class names starting with a specific prefix
  function getClassNamesWithPrefix(prefix) {
    // Create a Set to store unique class names
    const classNames = new Set();
    // Get all the elements by their class name
    const animationElements =  document.getElementsByClassName('oands');
    for (let i = 0; i < animationElements.length; i++) {
      const animationName = animationElements[i].classList[1] + "";
      animations[animationName]('i');
    }
    // Convert the Set to an array
    return [...classNames];
  }
 
  // Example usage
  const classNames = getClassNamesWithPrefix('oands');
  console.log(classNames);  // Log the result to the console
});
