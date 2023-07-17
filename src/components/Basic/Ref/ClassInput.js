import React, { Component } from 'react'

export class ClassInput extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  focusInput = () => {
    this.myRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.myRef}/>
      </div>
    )
  }
}

export default ClassInput
