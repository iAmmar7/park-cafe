import React from 'react';

import { usePageResource } from '../resources';

function AppInit() {
  const { data } = usePageResource();

  console.log('result', data);

  return <div>Application initializer</div>;
}

export default AppInit;
