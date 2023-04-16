import {getDistanceBetweenPoints} from './030-extract-to-function.js';

describe('getDistanceBetweenPoints', () => {

  it('should get distance between ref point and point at 100,100', () => {
    const result = getDistanceBetweenPoints({x: 100, y: 100})
    expect(result).toBe(100)
  });

  it('should get distance between custom point and point at 0,0', () => {
    global.referencePoint = {x: 0, y: 0}
    const result = getDistanceBetweenPoints({x: 0, y: 0})
    expect(result).toBe(0)
  });

  it('should get distance between ref point and point at 0,0', () => {
    const result = getDistanceBetweenPoints({x: 0, y: 0})
    expect(result).toBeCloseTo(223, -1)
  });

})
