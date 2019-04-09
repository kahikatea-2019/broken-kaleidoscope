import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        backgroundColor: randomHexColor(),
        width: '50px',
        height: '50px'

      }

    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        width: '50px',
        height: '50px'

      }

    })
  }
  render () {
    return (
      <React.Fragment>
        <div style ={this.state.style} onClick={this.clickHandler}></div>
      </React.Fragment>
    )
  }
}

export default Pixel
