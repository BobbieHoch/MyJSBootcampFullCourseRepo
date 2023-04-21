import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactModal from 'react-modal';
import { LightSwitch } from './components/LightSwitch';
import { TestForm } from './components/TestForm'

function App() {
  
  return (
    <div className="App">
      <TestForm />
    </div>
  );
}

export default App;
