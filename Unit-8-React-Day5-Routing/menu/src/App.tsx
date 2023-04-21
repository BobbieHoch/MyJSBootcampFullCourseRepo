import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { MenuRoute } from './components/MenuRoute';
import { DetailsRoute } from './components/DetailsRoute';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Header />
        <Routes>
          <Route path="/menu" element={<MenuRoute />} />
          <Route path="/details/:id" element={<DetailsRoute />} />
          <Route path="*" element={<Navigate to={"/menu"} />} />
        </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
