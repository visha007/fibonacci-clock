import React, { useState, useEffect, useRef } from 'react';
// import CatAlarm from '../media/cat_alarm.mp3';

const AlarmHandler = () => {
  const [currentFibonacci, setCurrentFibonacci] = useState(0);
  const [duration, setDuration] = useState('Calculating...');

  // const audioRef = useRef(new Audio(CatAlarm));

  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const formatDuration = (durationMs) => {
    // calculating each of the hh, mm, and ss components for the duration of the next alarm
    const totalSeconds = Math.floor(durationMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const result = `${hours}h ${minutes}m ${seconds}s`;  

    return result;
  };

  useEffect(() => {
    const nextFibonacci = fibonacci(currentFibonacci);
    const nextAlarmTime = new Date();
    nextAlarmTime.setHours(nextAlarmTime.getHours() + nextFibonacci);

    const updateDuration = () => {
      const now = new Date();
      const timeUntilAlarm = nextAlarmTime - now;
      if (timeUntilAlarm <= 0) {
        setDuration('Time is up!');
        // audioRef.current.play(); // play the alarm tune!! -> couldn't include this as chrome prohibits autoplaying media :(
        alert('Ruh Roh! Your alarm is going off!');
        setCurrentFibonacci((prev) => prev + 1);
      } else {
        setDuration(formatDuration(timeUntilAlarm));
      }
    };

    // updates the duration every second (to show real-time changes)
    const interval = setInterval(updateDuration, 1000);

    return () => clearInterval(interval);
  }, [currentFibonacci]);

  return (
    <div className="alarm-handler">
      <h3>Time until next alarm: {duration}</h3>
    </div>
  );
};

export default AlarmHandler;
