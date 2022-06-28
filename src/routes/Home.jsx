import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';

import { useCardResource } from '../resources';
import { isEmpty } from '../utils/helpers';
import { Header } from '../components';

function Home() {
  const { refetchCards } = useCardResource();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (isEmpty(state?.page)) navigate('/', { replace: true });
  }, [navigate, state?.page]);

  useEffect(() => {
    refetchCards(state?.page?.cards);
  }, [refetchCards, state?.page?.cards]);

  return (
    <>
      <Header />
      <Typography mt={2} variant='h6'>
        Home
      </Typography>
    </>
  );
}

export default Home;
