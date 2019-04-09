import React from 'react'

import Pixel from './Pixel'

const pixelArray = Array.from({length:100000}, () => <Pixel />)

const App = () => {
  return (
    <React.Fragment>
      {pixelArray}
    </React.Fragment>
  )
}

export default App
