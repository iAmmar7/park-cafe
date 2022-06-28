import { useCallback } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '../utils/firebase';
import { isEmpty } from '../utils/helpers';

const useCardClient = () => {
  const fetchCards = useCallback(({ queryKey }) => {
    const [, cardIds] = queryKey;
    if (!cardIds || isEmpty(cardIds)) return;
    const cardRef = collection(db, 'cards');
    const q = query(cardRef, where('id', 'in', cardIds));
    return getDocs(q);
  }, []);

  return { fetchCards };
};

export default useCardClient;
