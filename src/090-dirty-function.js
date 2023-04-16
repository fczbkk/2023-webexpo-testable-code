let name = ['Riki', 'Fridrich']

function dirtyFunction () {
  // different every time
  const random = Math.random()
  // also different every time
  const now = Date.now()
  // global variable can change...
  // ...also Array.reverse() causes mutation
  const reversedName = name.reverse()

  return random + now + reversedName.join('')
}
