import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {

  render() {
    return (
      <h2 onMouseOver={this.props.increaseCount}>HoverCounter {this.props.count} times</h2>
    )
  }
}

export default UpdatedComponent(HoverCounter)
