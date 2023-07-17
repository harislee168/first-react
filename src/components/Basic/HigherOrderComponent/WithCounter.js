import React from 'react'

const UpdatedComponent = (OriginalComponent, increaseNum=1) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
      console.log('with counter constructor')
      this.state = {
         count: 0
      }
    }

    increaseCount = () => {
      console.log('with counter increase count')
      this.setState((prevState) => {
        return {count: prevState.count + increaseNum}
      })
    }

    render() {
      console.log('with counter render')
      return <OriginalComponent count={this.state.count} increaseCount={this.increaseCount} {...this.props}/>
    }
  }
  return NewComponent
}

export default UpdatedComponent
