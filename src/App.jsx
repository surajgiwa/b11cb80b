import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CallProvider } from './context/CallContext';
import Home from './pages/Home';

import ActivityDetail from './pages/ActivityDetail';

const App = () => {
  return (
    <CallProvider>
      <Router>  {/* Router should only be here */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/activity/:id" element={<ActivityDetail />} />
        </Routes>
      </Router>
    </CallProvider>
  );
};

export default App;
