global.referencePoint = { x: 100, y: 200 };

export function getDistanceBetweenPoints (pointA, pointB) {
  const distanceX = pointA.x - pointB.x;
  const distanceY = pointA.y - pointB.y;
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
}

export function initDistanceChecker (referencePoint = global.referencePoint) {
  const handleClick = function (event) {
    const clickPoint = {x: event.clientX, y: event.clientY}
    const distance = getDistanceBetweenPoints(referencePoint, clickPoint)
    console.log(distance)
  }

  document.body.addEventListener('click', handleClick)

  return () => {
    document.body.removeEventListener('click', handleClick)
  }
}
