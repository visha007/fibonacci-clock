import React from 'react';

const DisplayClockAngle = ({ hours, minutes }) => {
  const calculateAngle = (hours, minutes) => {
    const hourAngle = (360 / 12) * (hours % 12) + (minutes / 60) * 30; 
    const minuteAngle = (360 / 60) * minutes;
    // get the diff. between the hour and min angles (gives the angle between the 2 clock hands)
    let angle = Math.abs(hourAngle - minuteAngle); 
    return Math.min(angle, 360 - angle);
  };

  // find the angle using the function coded above (given appropriate inputs) 
  const angle = calculateAngle(hours, minutes);

  return (
    <div className="clock-angle">
      <h3>Clock Angle : {angle} degrees</h3>
    </div>
  );
};

export default DisplayClockAngle;
