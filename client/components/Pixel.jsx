import React from 'react'

export default class Welcome extends React.Component {
  state = {
    style: {
        fontFamily: 'Times New Roman',
        height: '120px',
        width: '120px',
        backgroundColor: 'Pink'
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