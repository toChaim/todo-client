import React from 'react';
import styled from 'styled-components';
import Time from '../atoms/Time';

const ActivityStyle = styled.div`
  font-family: 'Anonymous Pro', monospace;
  border: 1px solid grey;
  display: flex;
  justify-content: space-around;
`;

const Activity = ({ activity }) => (
  <ActivityStyle>
    {activity.title} <Time time={new Date(activity.time)} />
  </ActivityStyle>
);

export default Activity;
