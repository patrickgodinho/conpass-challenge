import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const CPFooter = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dff0d8;
`;

const Info = styled.span`
  font-size: 24px;
  font-family: 'roboto';
  color: #3c763d;
  padding: 10px;
`;

class Footer extends Component {
  render() {
    return (
      <CPFooter>
        <Info>{this.props.text}</Info>
      </CPFooter>
    )
  }
}

export default connect(state => state.info)(Footer);