// @low
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {Header} from "../components/header";
import Footer from '../components/footer';
import Button from "../components/button";
import {setInfo} from "../actions/info";
import {addPoint, getPoints, removePoint} from "../actions/point";
import Points from "../components/points";
import {inspectModeOff, inspectModeOn} from "../actions/inspect";

const menuList = ['Menu1', 'Menu2', 'Menu3', 'Menu4', "Menu5"];

const Wrapper = styled.div`
  cursor: ${props => props.inspectMode ? 'crosshair' : 'default'}; 
  height: 100vh;
`;

const Point = styled.div`
  border-radius: 100%;
  background: crimson;
  opacity: 0.8;
	width: 25px;
	position: absolute;
	height: 25px; 
`;

const renderPoint = ({x, y, node}) => {
  const id = `${node}-${x}-${y}`;
  if (document.getElementById(id)) return;

  const div = document.createElement('div');
  const Element = <Point/>;
  div.style.left = x + 'px';
  div.style.top = y + 'px';
  div.style.position = 'absolute';
  div.setAttribute('id', id);

  ReactDOM.render(Element, div);
  document.getElementById('hotspots').appendChild(div);
};

const getHotsPot = event => {
  const node = event.target.nodeName.toLowerCase();
  const x = event.clientX;
  const y = event.clientY;
  return {node, x, y}
};


class App extends Component {

  inspectModeOn() {
    this.props.dispatch(inspectModeOn());
  }

  remove(p) {
    this.props.dispatch(removePoint(p));
    document.getElementById(`${p.node}-${p.x}-${p.y}`).remove();
  }

  onMouseMove(event) {
    if (!this.props.inspectMode) return;

    const {node, x, y} = getHotsPot(event);
    const info = `${node} - ${x}, ${y}`;
    this.props.dispatch(setInfo(info));
  }

  onMouseClick(event) {
    if (!this.props.inspectMode) return;

    const hotspot = getHotsPot(event);
    this.props.dispatch(addPoint(hotspot));
    this.props.dispatch(inspectModeOff())
  }


  handleEscKey(event) {
    if (event.keyCode === 27) {
      this.props.dispatch(inspectModeOff());
    }
  }

  componentDidUpdate() {
    this.props.points.map(point => renderPoint({...point}));
  }

  componentDidMount() {
    this.props.dispatch(getPoints());
    document.addEventListener("keydown", this.handleEscKey.bind(this), false);
  }

  render() {
    return (
      <Wrapper onMouseMove={this.onMouseMove.bind(this)}
               onClick={this.onMouseClick.bind(this)} inspectMode={this.props.inspectMode}>
        <div id="hotspots"/>
        <Header imageURL='http://conpass.io/imagens/elementos/logo-white.png' menuList={menuList}/>
        <Button inspectMode={this.props.inspectMode}
                onClick={this.inspectModeOn.bind(this)}/>
        <Points points={this.props.points} inspectMode={this.props.inspectMode}
                remove={this.remove.bind(this)}/>
        <Footer/>
      </Wrapper>
    )
  }
}

export default connect(state => ({...state.inspect, points: state.point.points}))(App);
