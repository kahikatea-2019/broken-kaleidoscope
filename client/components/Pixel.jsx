import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: 'cyan'
      }
    }
  }
  render () {
    return (
      <div style={this.state.style}></div>
    )
  }
}

export default Pixel
