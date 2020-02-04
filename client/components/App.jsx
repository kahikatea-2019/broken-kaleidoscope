import React from 'react'
import Pixel from './Pixel'


const multiplyPixel = () => {
  let ammountOfPixels = 100
  let pixels = Array.from({length: ammountOfPixels}, (v, i) => <Pixel key={i}></Pixel>);
  // console.log(pixels)
  return pixels
}

const App = () => {
  return (
    <React.Fragment>
      {multiplyPixel()}
    </React.Fragment>
  )
}

export default App
