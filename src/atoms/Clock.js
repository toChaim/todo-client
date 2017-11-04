import React from 'react';
import styled from 'styled-components';

const ClockStyle = styled.div`
  text-align: center;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  background: black;
`;

const Clock = props => <ClockStyle>00:00:00 PM</ClockStyle>;

export default Clock;
