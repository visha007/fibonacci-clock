import React, { useState, useEffect } from 'react';

const AlarmHandler = () => {
  const [currentFibonacci, setCurrentFibonacci] = useState(0);
  const [nextAlarm, setNextAlarm] = useState(null);
  // const audioRef = useRef(new Audio('/alarm-sound.mp3')); // Path to your sound file


  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  useEffect(() => {
    const nextFibonacci = fibonacci(currentFibonacci);
    const nextAlarmTime = new Date();
    nextAlarmTime.setHours(nextAlarmTime.getHours() + nextFibonacci);

    setNextAlarm(nextAlarmTime);

    const interval = setInterval(() => {
      if (new Date() >= nextAlarmTime) {
        // audioRef.current.play(); // play the alarm tune!! 
        alert('Alarm!');
        setCurrentFibonacci((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentFibonacci]);

  return (
    <div className="alarm-handler">
      <h3>Next Alarm : {nextAlarm ? nextAlarm.toLocaleTimeString() : 'Calculating...'}</h3>
    </div>
  );
};

export default AlarmHandler;
