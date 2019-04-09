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
  onContextMenu = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        height: 50,
        width: 50,
        backgroundColor: 'black'
      }
    })
  }
  clickHandler = evt => {
    this.setState({
      style: {
        height: 50,
        width: 50,
        backgroundColor: randomHexColor()
      }
    })
  }

  onMouseEnter = evt => {
    this.setState({
      style: {
        height: 50,
        width: 50,
        backgroundColor: 'green'
      }
    })
  }
  onDoubleClick= evt => {
    this.setState({
      style: {
        height: 50,
        width: 50,
        backgroundColor: 'white'
      }
    })
  }
  onDragEnter= evt => {
    this.setState({
      style: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onContextMenu ={this.onContextMenu} onMouseOver ={this.onMouseEnter} onDoubleClick={this.onDoubleClick} onDragEnter ={this.onDragEnter}></div>

    )
  }
}
export default Pixel
