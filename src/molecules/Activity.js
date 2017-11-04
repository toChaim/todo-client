import React from 'react';
import styled from 'styled-components';
import Time from '../atoms/Time';

const ActivityStyle = styled.div`
  font-family: 'Anonymous Pro', monospace;
  border: 1px solid grey;
`;

const Activity = ({ activity }) => {
  var strTime = new Date().toISOString().slice(0, 11) + activity.time + '.000Z';
  return (
    <ActivityStyle>
      {activity.title} <Time time={new Date(strTime)} />
    </ActivityStyle>
  );
};

export default Activity;
