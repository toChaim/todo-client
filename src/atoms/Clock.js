import React, { Component } from 'react';
import styled from 'styled-components';

const ClockStyle = styled.div`
  text-align: center;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  background: black;
`;

const Clock = ({ time }) => (
  <ClockStyle>{time.toLocaleTimeString()}</ClockStyle>
);

export default Clock;
