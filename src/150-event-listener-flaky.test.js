import {jest} from '@jest/globals'
import {initDistanceChecker} from './130-event-listener.js';

function simulateClick (x = 0, y = 0) {
  const event = new MouseEvent('click', { clientX: x, clientY: y })
  document.body.dispatchEvent(event)
}

describe('initDistanceChecker', () => {

  let mockConsoleLog

  beforeEach(() => {
    mockConsoleLog = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should log distance between default ref point and point at 100,100', () => {
    initDistanceChecker()
    simulateClick(100, 100)
    expect(console.log).toHaveBeenCalledWith(100)
  });

  it('should log distance between between custom point and point at 0,0', () => {
    initDistanceChecker({x: 0, y: 0})
    simulateClick(0, 0)
    expect(console.log).toHaveBeenCalledWith(0)
  });

  it('should log distance between custom ref point and point at 100,100', () => {
    initDistanceChecker({x: 0, y: 0})
    simulateClick(100, 100)
    const result = console.log.mock.calls[0][0]
    expect(result).toBeCloseTo(141, -1)
  });

})
