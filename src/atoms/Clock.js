import React from 'react';
import styled from 'styled-components';

const ClockStyle = styled.div`
  font-family: 'Anonymous Pro', monospace;
  font-size: 3rem;
  letter-spacing: 0rem;
`;

const Clock = ({ time }) => (
  <ClockStyle>{time.toLocaleTimeString()}</ClockStyle>
);

export default Clock;
