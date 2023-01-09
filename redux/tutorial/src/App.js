import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './app/router';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
