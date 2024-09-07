import { fadeout } from "../src/fade.js";
import { slidein } from "../src/slide.js";
import { slideout } from "../src/slide.js";
// Array to hold animation details extracted from elements
var animationDetails = [];

// Map of available animations by their names
const animations = {
  'fadeout' : fadeout,
  'slidein' : slidein,
  'slideout' : slideout
};

// Event listener for DOMContentLoaded to initialize animation processing
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with class names containing "oands"
  const elements = document.querySelectorAll('[class*="oands"]');
  // Process the selected elements to find and apply animations
  findAnimationDetails(elements);
});

/**
 * Extracts animation details from the given DOM elements and routes the animations.
 *
 * @param {NodeList} DOMelements - A NodeList of DOM elements to process.
 */
function findAnimationDetails(DOMelements) {
  DOMelements.forEach((currentElement) => {
    const classNameList = [];
    
    // Collect class names starting with 'oands'
    for (let className of currentElement.classList) {
      if (className.startsWith('oands')) {
        classNameList.push(className);
      }
    }
    
    // Store the class name list for the current element
    animationDetails.push({ 'classNameList': classNameList });
    
    // Route animations based on class names
    routeAnimation(currentElement, classNameList);
  });
}

/**
 * Routes the appropriate animation to be applied on the given element based on class names.
 *
 * @param {HTMLElement} currentDOMelement - The DOM element to which the animation will be applied.
 * @param {string[]} classNameList - A list of class names associated with animations.
 */
function routeAnimation(currentDOMelement, classNameList) {
  classNameList.forEach((className) => {
    try {
      // Extract the animation name from the class name and apply it
      const animationName = className.split('_')[1].toLowerCase();
      const animationDuration = className.split('_')[2].toLowerCase() || 1000; 
      if (animations[animationName]) {
        animations[animationName](currentDOMelement, animationDuration, className.split('_'));
      } else {
        throw new Error(`Animation "${animationName}" not found`);
      }
    } catch (error) {
      // Log an error if the animation is not found or any issue occurs
    }
  });
}

// Uncomment the function below to test redirection or other functionality
// function fadein() {
//   console.log('Redirected successfully');
// }
