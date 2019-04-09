import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()

    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    }
  }

  colorSplash= () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    })
  }

  dubClick= () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
        backgroundColor: 'white'
      }
    })
  }

  changeColor = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    })
  }

  draggy = () => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
        backgroundColor: 'pink'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.changeColor}
        onDoubleClick={this.dubClick}onMouseEnter={this.colorSplash}onDragEnter={this.draggy}>
      </div>
    )
  }
}

export default Pixel
