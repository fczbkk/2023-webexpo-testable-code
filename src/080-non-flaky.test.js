import {getDistanceBetweenPoints} from './070-global-to-param.js';

describe('getDistanceBetweenPoints', () => {

  it('should get distance between ref point and point at 100,100', () => {
    const result = getDistanceBetweenPoints({x: 100, y: 100})
    expect(result).toBe(100)
  });

  it('should get distance between custom point and point at 0,0', () => {
    const result = getDistanceBetweenPoints({x: 0, y: 0}, {x: 0, y: 0})
    expect(result).toBe(0)
  });

  it('should get distance between ref point and point at 200,100', () => {
    const result = getDistanceBetweenPoints({x: 200, y: 100})
    expect(result).toBeCloseTo(141, -1)
  });

})
