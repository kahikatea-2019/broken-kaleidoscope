import React from 'react'

let {randomHexColor} = require('../util/randomHex')

export default class Welcome extends React.Component {
  state = {
    style: {
        fontFamily: 'Times New Roman',
        height: '120px',
        width: '120px',
        backgroundColor: randomHexColor()
    }
  }
  
  render() {
    return (
      <div className="pixel"
        style={this.state.style}
      >
      </div>
    )
  }
}