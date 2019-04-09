import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        height: '30x',
        width: '30px',
        backgroundColor: 'cornflowerblue'
      }
    }
  }

  render () {
    return (
      <div style={this.state.style}>hi</div>
    )
  }
}

export default Pixel
