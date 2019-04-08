import React from 'react'

// function Pixel (props) {
//   return (
//     <React.Fragment>
//     <div> <div>
//     </React.Fragment>
//   )
// }

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'Blue'
      }
    }
  }

  const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  
  render () {
    return (
      <React.Fragment>
        <div style = {this.state.style}>
        </div>
      </React.Fragment>
    )
  }
}

export default Pixel
