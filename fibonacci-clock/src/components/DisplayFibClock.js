import React from 'react';
import DisplayTimeZone from './DisplayTimeZone';
import DisplayClockAngle from './DisplayClockAngle';
import AlarmHandler from './AlarmHandler';

const DisplayFibClock = () => {
  // the clock angle uses the local time as input to the DisplayClockAngle() method
  const localTime = new Date();
  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();

  return (
    <div className="clock-display">
        <DisplayClockAngle hours={hours} minutes={minutes} />
        <div className='timezone-container'>
            <DisplayTimeZone cityName="Chattogram" timezone="Asia/Dhaka" />
            <DisplayTimeZone cityName="Calcutta" timezone="Asia/Kolkata" />
            <DisplayTimeZone cityName="Delta" timezone="America/Vancouver" />
        </div>
      <AlarmHandler/>
    </div>
  );
};

export default DisplayFibClock;
