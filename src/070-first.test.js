import {getDistanceBetweenPoints} from './060-extract-to-function.js';

describe('getDistanceBetweenPoints', () => {

  it('should get distance between ref point and point at 100,100', () => {
    const result = getDistanceBetweenPoints({x: 100, y: 100})
    expect(result).toBe(100)
  });

})
