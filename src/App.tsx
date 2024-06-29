import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sort from './routes/Sort'

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sort />} />
      </Routes>
    </Router>
  );
}
