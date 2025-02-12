import React, {useState, useEffect} from 'react';

/**
 * Timer component that displays the current time and updates every second.
 * @returns {JSX.Element} A div containing the current time.
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
     * @param {Date} date - The Date object to format.
     * @returns {string} A string representing the time in "HH:MM:SS" format.
     */
    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div>
            <h1>Current Time: {formatTime(time)}</h1>
        </div>
    );
};

export default Timer;
