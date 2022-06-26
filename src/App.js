import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { Fallback } from './components';
import theme from './theme';
import './App.css';

const Home = lazy(() => import('./routes/Home'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
