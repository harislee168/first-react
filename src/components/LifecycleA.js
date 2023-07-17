import React, { Component } from 'react'
import LifecycleB from './LifecycleB.js'

class LifecycleA extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Hello World'
    }
    console.log('LifecycleA Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    console.log(`A ${state.name}`)
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('LifecycleA shouldComponentUpdate')
    console.log(`A Before ${this.state.name}`)
    console.log(`A After ${nextState.name}`)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    console.log(`A After ${prevState.name}`)
    return null
  }

  changeStateHandler = () => {
    this.setState({name: 'Bonny'})
  }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>Lifecyle A</div>
        <LifecycleB />
        <button onClick={this.changeStateHandler}>Change State</button>
      </div>

    )
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }
}

export default LifecycleA
