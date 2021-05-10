import * as React from "react";
import { render } from "react-dom";
import { Component } from "react";

class Button extends Component {
  render() {
    return <h1>Hello,Webpack</h1>;
  }
}

render(<Button />, window.document.getElementById("app"));
