import './App.css';
import React, { useState, useEffect } from 'react';

/**
 * Main application component for the countdown timer app.
 * 
 * This component renders a countdown timer with start, stop, and reset functionality.
 * 
 * @returns {JSX.Element} The rendered App component
 */
const App = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds (25 * 60)
  const [isRunning, setIsRunning] = useState(false);

  // Update the timer every second when it's running
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1; // Decrement time by 1 second
          } else {
            setIsRunning(false); // Stop the timer when it reaches 0
            return 0;
          }
        });
      }, 1000);
    }

    // Cleanup interval on component unmount or when the timer stops
    return () => clearInterval(interval);
  }, [isRunning]);

  // Start the timer
  const handleStart = () => setIsRunning(true);

  // Stop the timer
  const handleStop = () => setIsRunning(false);

  // Reset the timer to 25 minutes
  const handleReset = () => {
    setIsRunning(false);
    setTime(1500); // Reset to 25 minutes
  };

  /**
   * Formats the time (in seconds) into a string representation of "MM:SS".
   * @param {number} timeInSeconds - The time in seconds.
   * @returns {string} A string representing the time in "MM:SS" format.
   */
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="App">
      <div>
        <h1>Countdown: {formatTime(time)}</h1>
      </div>
      <div>
        <button onClick={handleStart} disabled={isRunning || time === 0}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning || time === 0}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;