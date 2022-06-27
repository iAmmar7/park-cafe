import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Fallback } from './components';
import theme from './theme';
import './App.css';

const Home = lazy(() => import('./routes/Home'));
const Landing = lazy(() => import('./routes/Landing'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Landing />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
