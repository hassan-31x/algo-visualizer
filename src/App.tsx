import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Sort from './routes/Sort'
import Path from './components/Path';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sort />} />
        <Route path="/path" element={<Path />} />
      </Routes>
    </Router>
  );
}
