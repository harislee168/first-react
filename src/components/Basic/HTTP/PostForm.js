import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
       userId: '',
       title: '',
       body: ''
    }
  }

  changeHandler = (e) => {
    const fieldName = e.target.name
    this.setState({[fieldName]: e.target.value }, () => {console.log(this.state[fieldName])})
  }

  submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {console.log(response)})
      .catch(error => {console.log(error)})
  }

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>User ID:</label>
            <input type='text' value={userId} name='userId' onChange={this.changeHandler}></input>
          </div>
          <div>
            <label>Title:</label>
            <input type='text' value={title} name='title' onChange={this.changeHandler}></input>
          </div>
          <div>
            <label>Body:</label>
            <input type='text' value={body} name='body' onChange={this.changeHandler}></input>
          </div>
          <div><button type='submit'>Submit</button></div>
        </form>
      </div>
    )
  }
}

export default PostForm
