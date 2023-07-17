import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
  constructor(props) {
    super(props)
    console.log('click counter constructor')
  }

  render() {
    console.log('click counter render')
    return (
      <div>
        <button onClick={this.props.increaseCount}> {this.props.name} Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter, 5)
