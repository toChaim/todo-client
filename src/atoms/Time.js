import React from 'react';
import styled from 'styled-components';

const TimeStyle = styled.div`
  font-family: 'Anonymous Pro', monospace;
  font-size: 3rem;
  letter-spacing: 0rem;
`;

const Time = ({ time }) => <TimeStyle>{time.toLocaleTimeString()}</TimeStyle>;

export default Time;
