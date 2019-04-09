import React from 'react'
import Pixel from './Pixel'

// // function fillScreen (screen) {
//   const screen = []
// for (let i = 0; screen.length < 5000; i++) {
//     screen.push(<Pixel />)
//   }
//   return screen
// }

const App = () => {
  return (
    <React.Fragment>
      {Array.from({ length: 1000 }, () => <Pixel />)}
    </React.Fragment>
  )
}

export default App
