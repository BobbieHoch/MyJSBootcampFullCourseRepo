import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllShoutOutsRoute from './routes/AllShoutOutRoutes';
import UserShoutOutsRoute from './routes/UserShoutOutsRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllShoutOutsRoute />} />
          <Route path="/user/:user" element={<UserShoutOutsRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
