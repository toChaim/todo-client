import React, { Component } from 'react';
import styled from 'styled-components';

const ClockStyle = styled.div`
  text-align: center;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  background: black;
`;

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          time: new Date()
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <ClockStyle>{this.state.time.toLocaleTimeString()}</ClockStyle>;
  }
}
