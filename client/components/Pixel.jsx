import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state.style = {
      style: {
        backgroundColor: 'blue',
        width: '50px',
        height: '50px'
      }
    }
  }
  render () {
    return (
      <React.Fragment>
        <div style ={this.state.style}></div>

      </React.Fragment>
    )
  }
}

export default Pixel
