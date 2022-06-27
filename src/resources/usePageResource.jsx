import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { usePageClient } from '../http';

const usePageResource = () => {
  const { fetchPages } = usePageClient();
  const { data, error, isLoading } = useQuery('pages', fetchPages);

  const pages = useMemo(() => {
    return data?.docs.map((doc) => doc.data());
  }, [data]);

  return { data: pages, error, isLoading };
};

export default usePageResource;
