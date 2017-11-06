import React from 'react';
import styled from 'styled-components';
import Time from '../atoms/Time';

const HeaderStyle = styled.div`
  text-align: center;
  font-family: 'Indie Flower', cursive;
  color: white;
  background: black;
  line-height: 1;
  letter-spacing: 0.2rem;
  padding: 5px;
`;
const HearderAcitivityStyle = styled.div`border: 1px solid red;`;
const BigClock = styled.div`font-size: 2.5rem;`;

const Header = ({ title, quote, time, startTime, activity }) => {
  const endTime = new Date(startTime + activity.time);
  return (
    <HeaderStyle>
      <h1>{title}</h1>
      <HearderAcitivityStyle>
        <Time time={startTime} />
        <div>{activity.title}</div>
        <Time time={endTime} />
      </HearderAcitivityStyle>
      <BigClock>
        <Time time={time} />
      </BigClock>
      <p>“{quote}”</p>
    </HeaderStyle>
  );
};
export default Header;
