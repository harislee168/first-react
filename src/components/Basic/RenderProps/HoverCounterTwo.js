import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  render() {
    return (
      <h2 onMouseOver={this.props.increaseCount}>HoverCounter {this.props.count} times</h2>
    )
  }
}

export default HoverCounterTwo
