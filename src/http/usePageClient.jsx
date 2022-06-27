import { useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import { db } from '../utils/firebase';

const usePageClient = () => {
  const fetchPages = useCallback(() => {
    const citiesCol = collection(db, 'pages');
    return getDocs(citiesCol);
  }, []);

  return { fetchPages };
};

export default usePageClient;
