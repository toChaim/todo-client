import React from 'react';
import styled from 'styled-components';
import { timeToString } from '../helpers/time';

const ClockStyle = styled.div`
  text-align: center;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  background: black;
`;

const Clock = ({ time }) => <ClockStyle>{timeToString(time)}</ClockStyle>;

export default Clock;
