import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const {fname, lname} = this.props
    return (
      <div>
        <h1>Welcome {fname} {lname}</h1>
      </div>
    )
  }
}

export default Welcome
