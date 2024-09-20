import React from 'react';
import Dashboard from './components/Dashboard'; // Importing the Dashboard component

function App() {
  return (
    <div className="App">
      <h1>Dynamic Dashboard</h1>
      <Dashboard /> {/* Rendering the Dashboard component */}
    </div>
  );
}

export { App };