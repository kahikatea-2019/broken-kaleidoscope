import React from 'react'

let {randomHexColor} = require('../util/randomHex')

export default class Welcome extends React.Component {
  constructor () {
    super()
  
    this.state = {
      style: {
          fontFamily: 'Times New Roman',
          height: '25px',
          width: '25px',
          backgroundColor: randomHexColor()
      }
    }
}

  clickHandler = () => {
    // bind function problem, using anonymous function fixes this. ... being out of call
    this.setState({
        style: {
          fontFamily: this.state.style.fontFamily,
          height: this.state.style.height,
          width: this.state.style.width,
          backgroundColor: randomHexColor()
      }
    })
    // console.log('someone clicked me')
  }

  rightClickHandler = (evt) => {
    // Makes click invisible
    evt.preventDefault()
    this.setState({
      style: {
        fontFamily: this.state.style.fontFamily,
        height: this.state.style.height,
        width: this.state.style.width,
        backgroundColor: '#FFFFFF'
    }
  })
  }

  render() {
    return (
      <div className="pixel"
        onClick={this.clickHandler}
        onContextMenu={this.rightClickHandler}
        style={this.state.style}
      >
      </div>
    )
  }
}