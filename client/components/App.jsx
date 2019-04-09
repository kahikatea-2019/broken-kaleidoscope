import React from 'react'

import Pixel from './Pixel'

const pixArray = Array.from({ length: 1000 }, () => <Pixel/>)

const App = () => {
  return (
    <React.Fragment>
      <div>React development has begun!</div>
      {pixArray}
    </React.Fragment>
  )
}

export default App
