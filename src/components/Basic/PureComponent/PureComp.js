import React, {PureComponent} from 'react'

class PureComp extends PureComponent {
  constructor(props){
    super(props)
  }

  render() {
    console.log('Pure Comp Render')
    return (
      <div>Pure name is: {this.props.name}</div>
    )
  }
}

export default PureComp
