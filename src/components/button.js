import React, {Component} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import {inspectModeOn} from "../actions/inspect";

const Section = styled.div`
    height: 150px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const CPButton = styled.button`
    background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    font-size: 16px;
    cursor: ${props => props.inspectMode ? 'crosshair' : 'pointer'};
`;

const Button  = props =>{
  const handleButtonClick = () => {
    if (props.inspectMode) return ()=>{};

    props.onClick();
  };
    return (
      <Section>
        <CPButton onClick={handleButtonClick.bind(this)} inspectMode={props.inspectMode}>Create Hotspot</CPButton>
      </Section>
    )
};

export default Button;
