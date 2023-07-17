import react, {Component} from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Bruce'
    }
    console.log('Constructor Lifecyle B')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps Lifecyle B')
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate Lifecycle B')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate Lifecycle B')
    return null
  }

  render() {
    console.log('render Lifecyle B')
    return (
      <div>LifeCycle B</div>
    )
  }

  componentDidUpdate() {
    console.log('Component Did Update Lifecyle B')
  }

  componentDidMount() {
    console.log('Component Did Mount Lifecyle B')
  }
}

export default LifecycleB
