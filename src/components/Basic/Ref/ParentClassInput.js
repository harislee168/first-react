import React, { Component } from 'react'
import ClassInput from './ClassInput'

class ParentClassInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  buttonClickHandler = () => {
    this.inputRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <ClassInput ref={this.inputRef}/>
        <button onClick={this.buttonClickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentClassInput
