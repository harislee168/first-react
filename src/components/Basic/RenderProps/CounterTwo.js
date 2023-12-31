import React, { Component } from 'react'

class CounterTwo extends Component {

  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }

  increaseCount = () => {
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    return (
      <div>{this.props.render(this.state.count, this.increaseCount)}</div>
    )

  }
}

export default CounterTwo
