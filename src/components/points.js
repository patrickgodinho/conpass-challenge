import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getPoints, removePoint} from "../actions/point";

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  min-height: 200px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-family: 'roboto', 'Droid Serif';
`;

const TitleList = styled.div`
  background-color:#4CAF50;
  display: flex;
  height: 30px;
  width: 300px;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: azure;
`;

const PointList = styled.div`
display: flex;
flex-direction: column;
 align-items: center;
 justify-items: center;
`;
const PointItem = styled.div`
 width: 300px;
 min-height: 30px;
 flex: 1;
 border-bottom:1px solid darkgray;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 align-content: center;
 flex-direction: row;
`;

const Info = styled.span`
flex: 1
`;

const RemoveIcon = styled.a`
display: flex;
justify-self: start;
    cursor: ${props => props.inspectMode ? 'crosshair' : 'pointer'}; 
`;

class Points extends Component {
  handleRemoveItem(p) {
    if(this.props.inspectMode) return;

    this.props.remove(p);
  }


  renderPoints() {
    if (!this.props.points.length > 0) return <span style={{fontSize: '12px', marginTop: '5px'}}>I am empty 😢</span>;
    return this.props.points.map(p => (
      <PointItem key={`${p.node}-${p.x}-${p.y}`}>
        <Info>{`${p.node} - ${p.x},${p.y}`}</Info>
        <RemoveIcon onClick={this.handleRemoveItem.bind(this, p)} inspectMode = {this.props.inspectMode}> <i className="fa fa-close"/></RemoveIcon>
      </PointItem>
    ))
  };

  render() {
    return (
      <Wrapper>
        <TitleList>List of hotspots</TitleList>
        <PointList>
          {this.renderPoints()}
        </PointList>
      </Wrapper>
    )
  }
}

export default Points