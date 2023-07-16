import React, { Component } from 'react'

class Counter extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  addCount = () => {
    this.setState((prevState) => {
      return (
        {count: prevState.count + 1}
      )
    }, ()=>{return console.log('addCount Callback function:', this.state.count)})
    console.log('addCount function:', this.state.count)
  }

  addCount2 = () => {
    this.setState((prevState) => {
      return (
        this.updateAddCount(prevState)
      )
    }, ()=>{return console.log('addCount2 Callback function:', this.state.count)})
    console.log('addCount2 function:', this.state.count)
  }

  updateAddCount = (prevState) => {
    return ({count: prevState.count + 1})
  }


  addFive = () => {
    this.addCount2()
    this.addCount2()
    this.addCount2()
    this.addCount2()
    this.addCount2()
  }

  // addFunction = () => {
  //   return this.setState({count: this.state.count + 1})
  // }

  // minusCount = () => {
  //   this.setState({count: this.state.count - 1},
  //     () => {console.log('minus Callback function:', this.state.count)})
  //   console.log('minus count is:', this.state.count)
  // }

  render(){
    return (
      <div>
        Count: {this.state.count}
        <div>
          <button onClick={this.addFive}>add</button>

          {/* other way is <button onClick={() => this.addFive())}>add</button> */}

          {/* <button onClick={() => this.minusCount()}>minus</button> */}
        </div>
      </div>
    )
  }
}

export default Counter
