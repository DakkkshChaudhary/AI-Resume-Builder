
// import './App.css';

// function App() {
//   return (
//     <>
//     <h1>Hello, World!</h1>
//     </>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
