function getDistanceBetweenPoints (pointA, pointB) {
  const distanceX = pointA.x - pointB.x;
  const distanceY = pointA.y - pointB.y;
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
}

self.onmessage = function (event) {
  const { pointA, pointB } = event.data;
  const distance = getDistanceBetweenPoints(pointA, pointB);
  postMessage({ pointA, pointB, distance });
};
