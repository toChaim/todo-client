import React from 'react';
import styled from 'styled-components';

const CheckBtnStyle = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid grey;
`;

const CheckBtn = ({ checked, onClick }) => {
  return (
    <CheckBtnStyle className={checked ? 'fa-check-circle-o' : 'fa-circle-o'} />
  );
};

export default CheckBtn;
