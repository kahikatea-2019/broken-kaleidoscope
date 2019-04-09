import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        height: '80px',
        width: '80px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  onHover = evt => {
    this.setState({
      style: {
        height: '80px',
        width: '80px',
        backgroundColor: 'green'
      }
    })
  }

rightClickBlack = evt => {
  this.setState({
    style: {
      height: '80px',
      width: '80px',
      backgroundColor: 'black'

    }
  })
}

doubleClick = evt => {
  this.setState({
    style: {
      height: '80px',
      width: '80px',
      backgroundColor: 'white'

    }
  })
}

yellowDrag = evt => {
  this.setState({
    style: {
      height: '80px',
      width: '80px',
      backgroundColor: 'yellow'
    }
  })
}

clickHandler = evt => {
  this.setState({
    style: {
      height: '80px',
      width: '80px',
      backgroundColor: this.randomHexColor()
    }
  })
}

render () {
  return (
    <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.onHover} onContextMenu={this.rightClickBlack} onDoubleClick={this.doubleClick} onDragEnter={this.yellowDrag}
    ></div>
  )
}
}

export default Pixel
