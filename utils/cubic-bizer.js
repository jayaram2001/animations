import { defaultAnimationTiming } from "../utils/animation-constant";

/**
 * Computes the y-coordinate of a cubic-bezier curve at a given t value.
 *
 * @param {number} t - The time value, typically between 0 and 1.
 * @param {number} p1x - The x-coordinate of the first control point.
 * @param {number} p1y - The y-coordinate of the first control point.
 * @param {number} p2x - The x-coordinate of the second control point.
 * @param {number} p2y - The y-coordinate of the second control point.
 * @returns {number} - The y-coordinate of the curve at time t.
 */
function cubicBezier(t, p1x, p1y, p2x, p2y) {
    const cX = 3 * p1x;
    const bX = 3 * (p2x - p1x) - cX;
    const aX = 1 - cX - bX;

    const cY = 3 * p1y;
    const bY = 3 * (p2y - p1y) - cY;
    const aY = 1 - cY - bY;

    // Compute the x and y coordinates for the given t
    const x = ((aX * t + bX) * t + cX) * t;
    const y = ((aY * t + bY) * t + cY) * t;

    return y;
}

/**
 * Generates an array of opacity values based on cubic-bezier control points.
 *
 * @param {number} p1x - The x-coordinate of the first control point.
 * @param {number} p1y - The y-coordinate of the first control point.
 * @param {number} p2x - The x-coordinate of the second control point.
 * @param {number} p2y - The y-coordinate of the second control point.
 * @returns {number[]} - An array of normalized opacity values.
 */
export function generateOpacityValues(p1x, p1y, p2x, p2y) {
    const values = [];
    const steps = 100;

    // Generate opacity values for each step
    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        const easedValue = cubicBezier(t, p1x, p1y, p2x, p2y);
        values.push(easedValue);
    }
    console.log(values , 'value' , p1x, p1y, p2x, p2y);

    // Normalize the values so that their sum equals 1
    const sum = values.reduce((acc, value) => acc + value, 0);
    const normalizedValues = values.map(value => value / sum);
    return normalizedValues;
}

/**
 * Extracts cubic-bezier control points from a class name string.
 *
 * @param {string} className - The class name containing cubic-bezier timing function.
 * @returns {number[]} - An array of cubic-bezier control points [p1x, p1y, p2x, p2y].
 */
export function extractCubicBezier(className) {
    // Remove 'cubic-bezier' and parentheses, then split by comma to extract values
    const cubicBeizerTiming = className
        .replace('cubic-bezier', '')
        .replace('(', '')
        .replace(')', '')
        .split('/')
        .map(value => parseFloat(value.trim()));

    return cubicBeizerTiming;
}

/**
 * Finds the appropriate animation timing function from a list of class names.
 *
 * @param {string[]} classNameList - A list of class names that may contain animation timing functions.
 * @returns {string} - The found animation timing function or 'linear' if none is found.
 */
export function findAnimationTimingFunction(classNameList) {
    const timingClass = classNameList.find(className => {
        // Find if any key in defaultAnimationTiming matches part of the class name
        return Object.keys(defaultAnimationTiming).find(timing => {
            return className.includes(timing);
        });
    });
    console.log(classNameList,timingClass);

    return timingClass ? timingClass : 'linear';
}
