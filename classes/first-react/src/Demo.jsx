import React, { Component } from 'react';

class Demo extends Component {
  render() {
    const name = this.props.name;
    return (
      <div> I am from demo and my name is {name} </div>
    );
  }
}

export default Demo;
