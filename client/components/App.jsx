import React from 'react'
import Pixel from './Pixel'

function fillScreen (screen) {
  
  for (let i = 0; screen.length < 1000000; i++) {
    screen.push(<Pixel />)
  }
  return screen
}

const App = () => {
  const screen = []
  return (
    <React.Fragment>
      <div>React development has begun!</div>

      {fillScreen(screen)}
    </React.Fragment>
  )
}

export default App
