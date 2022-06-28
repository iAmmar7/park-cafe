import { useMemo, useState, useCallback } from 'react';
import { useQuery } from 'react-query';

import { useCardClient } from '../http';

const useCardResource = () => {
  const [cardIds, setCardIds] = useState([]);
  const { fetchCards } = useCardClient();
  const { data, error, isLoading, refetch } = useQuery(['cards', cardIds], fetchCards, {
    enabled: true,
  });

  const refetchCards = useCallback(
    (ids) => {
      setCardIds(ids);
      refetch();
    },
    [refetch],
  );

  const cards = useMemo(() => {
    return data?.docs.map((doc) => doc.data());
  }, [data]);

  return { data: cards, error, isLoading, refetchCards };
};

export default useCardResource;
