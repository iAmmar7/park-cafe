import { useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import { db } from '../utils/firebase';

const useCardClient = () => {
  const fetchCards = useCallback(() => {
    const citiesCol = collection(db, 'cards');
    return getDocs(citiesCol);
  }, []);

  return { fetchCards };
};

export default useCardClient;
