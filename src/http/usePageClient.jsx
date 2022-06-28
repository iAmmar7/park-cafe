import { useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import { db } from '../utils/firebase';

const usePageClient = () => {
  const fetchPages = useCallback(() => {
    const pagesCol = collection(db, 'pages');
    return getDocs(pagesCol);
  }, []);

  return { fetchPages };
};

export default usePageClient;
