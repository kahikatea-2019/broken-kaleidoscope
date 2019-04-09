import React from 'react'
import Pixel from './Pixel'
import { arrayExpression } from '@babel/types'

const App = () => {
  return (
    <div>
      {Array.from({ length: 1000 }, () => <Pixel />)}
    </div>
  )
}

export default App
