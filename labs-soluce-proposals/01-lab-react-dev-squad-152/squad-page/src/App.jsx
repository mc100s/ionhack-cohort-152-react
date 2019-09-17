import React from 'react';
import Navbar from './Navbar';
import SectionStudents from './SectionStudents';
import SectionTopicsToRecap from './SectionTopicsToRecap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SectionStudents />
        <SectionTopicsToRecap />
      </div>
    </div>
  );
}

export default App;
