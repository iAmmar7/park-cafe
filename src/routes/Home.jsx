import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';

import { isEmpty } from '../utils/helpers';

function Home() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (isEmpty(state?.page)) navigate('/', { replace: true });
  }, [navigate, state?.page]);

  return (
    <Typography mt={2} variant='h6'>
      Home
    </Typography>
  );
}

export default Home;
