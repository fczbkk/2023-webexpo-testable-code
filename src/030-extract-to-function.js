global.referencePoint = { x: 100, y: 200 };

export function getDistanceBetweenPoints (point) {
  const distanceX = point.x - referencePoint.x;
  const distanceY = point.y - referencePoint.y;
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
}
