import React from 'react';
import styled from 'styled-components';

const TimeStyle = styled.span`
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 0rem;
`;

const Time = ({ time }) => <TimeStyle>{time.toLocaleTimeString()}</TimeStyle>;

export default Time;
