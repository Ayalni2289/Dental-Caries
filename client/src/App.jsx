import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Register/ >} />
      </Routes>
    </Router>
  );
}

export default App;
