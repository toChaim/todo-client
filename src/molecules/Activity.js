import React, { Component } from 'react';
import styled from 'styled-components';

const ActivityStyle = styled.div`
  font-family: 'Anonymous Pro', monospace;
  border: 1px solid grey;
`;

const Activity = ({ activity }) => (
  <ActivityStyle>{activity.title}</ActivityStyle>
);

export default Activity;
