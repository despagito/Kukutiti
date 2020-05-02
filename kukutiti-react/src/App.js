import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Body } from './features/Body.tsx';
import { Header } from './features/Header.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
