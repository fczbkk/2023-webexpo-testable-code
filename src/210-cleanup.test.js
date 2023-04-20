import {jest} from '@jest/globals'
import {initDistanceChecker} from './200-cleanup.js';

function simulateClick (x = 0, y = 0) {
  const event = new MouseEvent('click', { clientX: x, clientY: y })
  document.body.dispatchEvent(event)
}

describe('initDistanceChecker', () => {

  beforeEach(() => {
    jest.spyOn(console, 'log')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should log distance between default ref point and point at 100,100', () => {
    const cleanup = initDistanceChecker()
    simulateClick(100, 100)
    expect(console.log).toHaveBeenCalledWith(100)
    cleanup()
  });

  it('should log distance between between custom point and point at 0,0', () => {
    const cleanup = initDistanceChecker({x: 0, y: 0})
    simulateClick(0, 0)
    expect(console.log).toHaveBeenCalledWith(0)
    cleanup()
  });

  it('should log distance between custom ref point and point at 100,100', () => {
    const cleanup = initDistanceChecker({x: 0, y: 0})
    simulateClick(100, 100)
    const result = console.log.mock.calls[0][0]
    expect(result).toBeCloseTo(141, -1)
    cleanup()
  });

})
