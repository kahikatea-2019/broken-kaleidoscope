import React from 'react'
// const Pixel = () => {
// return (

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: 50,
        width: 50,
        backgroundColor: randomHexColor()
      }
  
    }
  }

  colorChange = () => {
    this.setState({
      style: {
        height: 50,
        width: 50,
        backgroundColor: randomHexColor()
      }
    })
  }
  render () {
    return (
      <div style={this.state.style} onClick={this.colorChange}></div>

    )
  }
}
export default Pixel
