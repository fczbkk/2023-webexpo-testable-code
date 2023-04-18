global.referencePoint = { x: 100, y: 200 };

export function getDistanceBetweenPoints (pointA, pointB = global.referencePoint) {
  const distanceX = pointA.x - pointB.x;
  const distanceY = pointA.y - pointB.y;
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
}
