import React, { PureComponent } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParComp extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Hello World Parent Comp'
    }
  }

  render() {
    console.log('Parent Comp Render')
    return (
      <div>
        ParComp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({name: 'Heelloo Parent'})
    }, 2000);
  }
}

export default ParComp
