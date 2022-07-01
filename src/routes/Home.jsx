import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useCardResource } from '../resources';
import { isEmpty } from '../utils/helpers';
import { Header, CardContainer, Footer } from '../components';

function Home() {
  const { data, isLoading, refetchCards } = useCardResource();
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
      <CardContainer data={data} loading={isLoading} />
      <Footer page={state.page} />
    </>
  );
}

export default Home;
