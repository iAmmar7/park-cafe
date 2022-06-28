import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useCardResource } from '../resources';
import { isEmpty } from '../utils/helpers';
import { Header, CardContainer } from '../components';

function Home() {
  const { data, refetchCards } = useCardResource();
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
      <CardContainer data={data} />
    </>
  );
}

export default Home;
