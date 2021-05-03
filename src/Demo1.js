import React, { Component } from "react";

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>
      <h1>This is the content</h1></div>;
  }
}

export default Demo1;