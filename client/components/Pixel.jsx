import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '30px',
        width: '30px',
        backgroundColor: randomHexColor()
      }
    }
  }

clickHandler = (evt) => {
  this.setState({
    style: {
      height: '30px',
      width: '30px',
      backgroundColor: randomHexColor()
    }
  })
}

turnColor = evt => {
  this.setState({
    style: {
      height: '30px',
      width: '30px',
      backgroundColor: 'green'
    }
  })
}

ContextMenuHandler = evt => {
  evt.preventDefault()
  this.setState({
    style: {
      height: '30px',
      width: '30px',
      backgroundColor: 'black'
    }
  })
}

doubleClickHandler = evt => {
  this.setState({
    style: {
      height: '30px',
      width: '30px',
      backgroundColor: 'white'
    }
  })
}

dragEnter = evt => {
  this.setState({
    style: {
      height: '30px',
      width: '30px',
      backgroundColor: 'yellow'
    }
  })
}

render () {
  return (
    <React.Fragment>
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.turnColor} onDoubleClick={this.doubleClickHandler}
        onDragEnter={this.dragEnter} onContextMenu={this.ContextMenuHandler}>
      </div>
    </React.Fragment>
  )
}
}

export default Pixel
