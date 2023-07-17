import React, { Component } from 'react'

class RefsDemo extends Component {

  constructor(props) {
    super(props)
    this.inputRefs = React.createRef()
    this.state = {
      userName: ''
    }
  }

  userNameHandler = (event) => {
    this.setState({userName:event.target.value}, () => {console.log(this.state.userName)})
  }

  componentDidMount() {
    console.log(this.inputRefs)
    this.inputRefs.current.focus()
  }

  render() {
    return (
      <div>
        <label>Username: </label>
        <input type='text' ref={this.inputRefs} value={this.state.userName} onChange={this.userNameHandler}></input>
      </div>
    )
  }
}

export default RefsDemo
