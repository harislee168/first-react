import React, {Component} from 'react'


class Form extends Component {
  constructor() {
    super()
    this.topicsArray = [{id:1, value: 'React'}, {id:2 , value:'Angular'}, {id:3, value:'Vue'}]
    this.state = {
      userName: '',
      message:'',
      topic:this.topicsArray[0].value
    }
  }

  nameHandler = (e) => {
    return (
      this.setState({userName: e.target.value}, () => console.log(this.state.userName))
    )
  }

  messageHandler = (e) => {
    return (
      this.setState({message: e.target.value}, () => console.log(this.state.message))
    )
  }

  topicHandler = (e) => {
    return (
      this.setState({topic: e.target.value}, () => console.log(e.target.value))
    )
  }

  submitHandler = (e) => {
    e.preventDefault()
    return (
      alert(`username is: ${this.state.userName}. \nMessage is: ${this.state.message}. \nTopic is: ${this.state.topic}`)
    )
  }


  render(){
    return (
      <div>
        <h1>Form component</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Name: </label>
            <input type='text' value={this.state.userName} onChange={this.nameHandler} />
          </div>
          <div>
            <label>Message: </label>
            <textarea value={this.state.message} onChange={this.messageHandler} />
          </div>
          <div>
            <label>Topics: </label>
            <select value={this.state.topic} onChange={this.topicHandler}>
              {this.topicsArray.map(topic => <option key={topic.id} value={topic.value}>{topic.value}</option>)}
            </select>
          </div>
          <div><button type='submit'>Submit</button></div>
        </form>
      </div>

    )
  }
}

export default Form
