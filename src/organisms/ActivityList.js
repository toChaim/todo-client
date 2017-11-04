import React, { Component } from 'react';
import styled from 'styled-components';
import Activity from '../molecules/Activity';

const ActivityListStyle = styled.div`
  font-family: 'Anonymous Pro', monospace;
  border: 3px solid black;
`;

const ActivityList = ({ activities }) => {
  var activitiesComponents = null;
  if (activities) {
    activitiesComponents = Object.values(activities)
      .sort((a, b) => a.order - b.order)
      .map(v => <Activity key={v._id} activity={v} />);
  }
  return <ActivityListStyle>{activitiesComponents}</ActivityListStyle>;
};

export default ActivityList;
