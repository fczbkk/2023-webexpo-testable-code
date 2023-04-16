global.referencePoint = { x: 100, y: 200 };

function makeCacheable (fn) {
  const results = new Map();
  return function (...args) {
    if (!results.has(args)) {
      results.set(args, fn(...args));
    }
    return results.get(args);
  };
}

export const getDistanceBetweenPoints = makeCacheable(
  function (pointA, pointB = global.referencePoint) {
    const distanceX = pointA.x - pointB.x;
    const distanceY = pointA.y - pointB.y;
    return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  }
);
