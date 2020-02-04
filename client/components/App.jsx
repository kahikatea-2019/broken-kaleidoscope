import React from 'react'
import Pixel from './Pixel'


const multiplyPixel = () => {
  let ammountOfPixels = 1000
  let pixels = Array.from({length: ammountOfPixels}, (v, i) => <Pixel key={i}></Pixel>);
  // console.log(pixels)
  return pixels
}

const App = () => {
  return (
    <React.Fragment>
      <h3>Left click to change colour. Right click to make invisible.</h3>
      <br></br>
      {multiplyPixel()}
    </React.Fragment>
  )
}

export default App
