import {jest} from '@jest/globals'
import {initDistanceChecker} from './170-event-listener.js';

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

  it('should log distance between ref point and point at 100,100', () => {
    initDistanceChecker()
    simulateClick(100, 100)
    expect(console.log).toHaveBeenCalledWith(100)
  });

})
