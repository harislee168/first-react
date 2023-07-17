import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParComp extends Component {
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
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
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
