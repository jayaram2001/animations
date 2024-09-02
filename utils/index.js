import {  fadeout } from "../src/fade.js";

var animationDetails = []
const animations = {
  'fadeout' : fadeout
}
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[class*="oands"]');
  findAnimationDetails(elements);
});

function findAnimationDetails(DOMelements) {
  DOMelements.forEach((currentElement) => {
    const classNameList = [];
    for (let className of currentElement.classList) {
      if (className.startsWith('oands')) {
        classNameList.push(className);
      }
    }
    animationDetails.push({'classNameList' : classNameList});
    routeAnimation(currentElement , classNameList);
  });
}

function routeAnimation(currentDOMelement , classNameList){
  classNameList.forEach((className) => {
    try{
      animations[className.split('_')[1].toLowerCase()](currentDOMelement, 3000 , className.split('_'));
    }
    catch{
      console.log(`no animations found for class name "${className.split('_')[1]}"` )
    }
  })
}

// function fadein(){
//   console.log('redirected succewsfully')
// }