import React from 'react'



class Pixel extends React.Component {
  constructor () {
    super ()
    this.state = {
      style = {
        height: '50px',
        width: '50px',
        backgroundColor: 'black'
      }
    }
  }
  
  render () {
    return (
      <div {this.state.style}>
      </div>
    )
  }
}

export default Pixel

// To easily work with the values we use in the style JSX attribute, we should put them into component state. Define a constructor (don't forget to call super!) and set the initial value of this.state. It should have a style property on it which is an object suitable for use in the style JSX attribute.

// Next, change your component JSX to refer to this.state.style instead of including an object literal. When you're done, there should be no change in the rendered output in your browser: it should work the same whether or not you have the style in state or in the JSX.

// What you've just done is make your component more flexbile. We can now manipulate the values any way we'd like using this.setState().