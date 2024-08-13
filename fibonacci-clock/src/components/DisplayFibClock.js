import React from 'react';
import DisplayTimeZone from './DisplayTimeZone';
import DisplayClockAngle from './DisplayClockAngle';
import AlarmHandler from './AlarmHandler';

const DisplayFibClock = () => {
  const localTime = new Date();
  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();

  return (
    <div className="clock-display">
        <DisplayClockAngle hours={hours} minutes={minutes} />
        <div className='timezone-container'>
            <DisplayTimeZone city="Chattogram" timezone="Asia/Dhaka" />
            <DisplayTimeZone city="Calcutta" timezone="Asia/Kolkata" />
            <DisplayTimeZone city="Delta" timezone="America/Vancouver" />
        </div>
      <AlarmHandler/>
    </div>
  );
};

export default DisplayFibClock;
