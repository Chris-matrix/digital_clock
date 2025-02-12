import logo from './logo.svg';
import './App.css';
import React from 'react';
import Timer from './timer';

/**
 * Main application component for the digital clock app.
 * 
 * This component renders the main structure of the application,
 * including the header with React logo and link, and the Timer component.
 * 
 * @returns {JSX.Element} The rendered App component
 */
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Timer />
    </div>
  );
};

export default App;