import React from 'react';
import styled from 'styled-components';
import { timeToString } from '../helpers/shortTime';

const TimeStyle = styled.div`
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 0rem;
`;

const MAX_SORT_TIME = new Date(1970, 11, 31);

const Time = ({ time }) => {
  return (
    <TimeStyle>
      {time > MAX_SORT_TIME ? time.toLocaleTimeString() : timeToString(+time)}
    </TimeStyle>
  );
};

export default Time;
