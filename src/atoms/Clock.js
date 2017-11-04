import React, { Component } from 'react';
import styled from 'styled-components';

const ClockStyle = styled.div`
  text-align: center;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  background: black;
`;

export default class Clock extends React.Component {
  render() {
    return <ClockStyle>{this.props.time.toLocaleTimeString()}</ClockStyle>;
  }
}
