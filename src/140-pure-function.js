let name = ['Riki', 'Fridrich']

function pureFunction (random = Math.random(), now = Date.now(), nameChunks = name) {
  const reversedName = [...nameChunks].reverse()
  return random + now + reversedName.join('')
}
