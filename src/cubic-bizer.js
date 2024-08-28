function cubicBezier(t, p1x, p1y, p2x, p2y) {
    const cX = 3 * p1x;
    const bX = 3 * (p2x - p1x) - cX;
    const aX = 1 - cX - bX;

    const cY = 3 * p1y;
    const bY = 3 * (p2y - p1y) - cY;
    const aY = 1 - cY - bY;

    const x = ((aX * t + bX) * t + cX) * t;
    const y = ((aY * t + bY) * t + cY) * t;

    return y;
}

export function generateOpacityValues(p1x, p1y, p2x, p2y) {
    const values = [];
    const steps = 100; // Number of values

    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1); // Progress from 0 to 1
        const easedValue = cubicBezier(t, p1x, p1y, p2x, p2y);
        values.push(easedValue);
    }

    return values;
}
