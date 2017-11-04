import React from 'react';
import styled from 'styled-components';
import Clock from '../atoms/Clock';

const HeaderStyle = styled.div`
  text-align: center;
  font-family: 'Indie Flower', cursive;
  color: white;
  background: black;
`;

const Header = ({ title, quote, time }) => (
  <HeaderStyle>
    <h1>{title}</h1>
    <Clock time={time} />
    <p>“{quote}”</p>
  </HeaderStyle>
);

export default Header;
