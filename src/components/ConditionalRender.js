import React, {Component} from 'react'

class ConditionalRender extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    return this.state.isLoggedIn && <div>Welcome Hello World</div>

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Hello World</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }
  }
}

export default ConditionalRender
