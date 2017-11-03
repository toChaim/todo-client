import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  text-align: center;
  color: white;
  background: black;
`;

const Header = ({ title, quote }) => (
  <HeaderStyle>
    <h1>{title}</h1>
    <p>“{quote}”</p>
  </HeaderStyle>
);

export default Header;
