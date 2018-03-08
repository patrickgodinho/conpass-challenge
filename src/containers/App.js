// @low
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeInfo, setInfo} from "../actions/info";

class App extends Component {

  mouseOver = e => {
    e.target.classList.add('focused');
    this.props.dispatch(setInfo(e.target.nodeName.toLowerCase()));
  };

  mouseOut = e => {
    e.target.classList.remove('focused');
    this.props.dispatch(removeInfo());
  };

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <p>Patrick</p>
        <span>{this.props.info.text}</span>
      </div>
    )
  }
}

export default connect(state => state)(App);
