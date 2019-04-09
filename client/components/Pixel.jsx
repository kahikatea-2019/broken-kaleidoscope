import React from 'react'
// const Pixel = () => {
// return (
class Pixel extends React.Component {
  constructor () {
    super()
    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: 50,
        width: 50,
        backgroundColor: randomHexColor()
      }
      //     name: 'Don'
    }
  }

  render () {
    return (
      <React.Fragment>
        <div style={this.state.style }></div>
     
      </React.Fragment>
      // <div id='app'>
      //   <div style={{
      //     fontFamily: 'Times New Roman',
      //     height: '50px',
      //     width: '50px',
      //     backgroundColor: 'cornflowerblue'
      //   }}></div>
      // </div>
    )
  }
}

export default Pixel
