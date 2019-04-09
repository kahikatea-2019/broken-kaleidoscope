import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

  state = {
    style: {
      height: '4px',
      width: '4px',
      backgroundColor: randomHexColor()
    }
  }

  clickHandler = evt => {
    this.setState({
      style: { 
        height: '4px',
        width: '4px',
        backgroundColor: randomHexColor() }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler}>
      </div>
    )
  }
}

export default Pixel

// To easily work with the values we use in the style JSX attribute, we should put them into component state. Define a constructor (don't forget to call super!) and set the initial value of this.state. It should have a style property on it which is an object suitable for use in the style JSX attribute.

// Next, change your component JSX to refer to this.state.style instead of including an object literal. When you're done, there should be no change in the rendered output in your browser: it should work the same whether or not you have the style in state or in the JSX.

// What you've just done is make your component more flexbile. We can now manipulate the values any way we'd like using this.setState().
