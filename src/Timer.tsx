import React, { useState, useEffect } from 'react';

/**
 * Timer component that displays the current time and updates every second.
 * Will return {JSX.Element} A div containing the current time.
 */
const Timer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    /**
     * Formats a Date object into a string representation of time.
     * The Date object to format.
      * returns {string} A string in the format "HH:MM:SS".
     */
    const formatTime = (date: Date) => {
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <h1>Current Time: {formatTime(time)}</h1>
        </div>
    );
};

export default Timer;
