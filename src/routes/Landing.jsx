import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { usePageResource } from '../resources';
import { isEmpty } from '../utils/helpers';

function Landing() {
  const navigate = useNavigate();
  const { data } = usePageResource();

  useEffect(() => {
    if (!isEmpty(data)) navigate('/home', { replace: true, state: { page: data[0] } });
  }, [data, navigate]);

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minHeight='100vh'>
      <CircularProgress size={60} />
      <Typography mt={2} variant='h6'>
        Application initializing...
      </Typography>
    </Box>
  );
}

export default Landing;
