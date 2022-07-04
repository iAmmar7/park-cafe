import React, { useEffect } from 'react';

import { withPageDetails } from '../hoc';
import { useCardResource } from '../resources';
import { Header, CardContainer, Footer } from '../components';

function Home(props) {
  const { page } = props;
  const { data, isLoading, refetchCards } = useCardResource();

  useEffect(() => {
    refetchCards(page?.cards);
  }, [refetchCards, page?.cards]);

  return (
    <>
      <Header />
      <CardContainer data={data} loading={isLoading} />
      <Footer page={page} />
    </>
  );
}

export default withPageDetails(Home);
