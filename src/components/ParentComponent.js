import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{

  constructor() {
    super()
    this.state = {
      parentName: 'Mickey'
    }
  }

  greetParent = (boy, girl) => {
    return (
      alert(`Greet ${this.state.parentName} from ${boy} and ${girl}`)
    )
  }

  render() {
    return (
      <div>
        <ChildComponent handler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
