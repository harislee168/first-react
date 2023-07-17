import React, { Component } from 'react'
import FuncInput from './FuncInput'

export class ParentFuncInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusInput = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <FuncInput ref={this.inputRef}/>
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    )
  }
}

export default ParentFuncInput
