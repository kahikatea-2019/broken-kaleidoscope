import React from 'react'
import { genericTypeAnnotation } from '@babel/types'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = evt => {
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  hoverHandler = evt => {
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: '#82E0AA'
      }
    })
  }

  rightClickHandler = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: '#17202A'
      }
    })
  }

  doubleClickHandler = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: '#fff'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.hoverHandler} onContextMenu={this.rightClickHandler}
        onDoubleClick={this.doubleClickHandler}>
      </div>
    )
  }
}

export default Pixel
