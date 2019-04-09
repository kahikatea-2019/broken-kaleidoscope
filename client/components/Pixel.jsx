import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: 30,
        width: 30,
        backgroundColor: this.randomHexColor()
      }
    }
  }

  clickHandler = event => {
    this.setState({
      style: {
        height: 30,
        width: 30,
        backgroundColor: this.randomHexColor()
      }
    })
  }
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  // applyColor = () => {
  //   this.setState({
  //     color: this.state.color
  //   })
  // }

  render () {
    return (
      <React.Fragment>
        <div style={this.state.style}
          onMouseEnter={this.clickHandler}>
        </div>

      </React.Fragment>
    )
  }
}

export default Pixel
