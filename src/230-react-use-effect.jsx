import React, {useEffect} from 'react'

function MyComponent () {
  useEffect(() => {
    const handleClick = () => console.log('you have clicked on body')
    document.body.addEventListener('click', handleClick)

    return () => {
      document.body.removeEventListener('click', handleClick)
    }
  }, [])

  return <div>the body of document is clickable</div>
}
