import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const DisplayTimeZone = ({ cityName, timezone }) => {
  const [time, setTime] = useState(moment.tz(timezone).format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment.tz(timezone).format('HH:mm:ss')); // update the duration for each city every second (to display real-time changes)
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="display-timezone">
      <h2>{cityName}</h2>
      <p>{time}</p>
    </div>
  );
};

export default DisplayTimeZone;
