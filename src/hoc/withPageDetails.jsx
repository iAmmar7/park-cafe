import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { usePageResource } from '../resources';
import { isEmpty } from '../utils/helpers';

function withPageDetails(Component) {
  return (props) => {
    const { data } = usePageResource();

    if (!isEmpty(data)) return <Component {...props} page={data[0]} />;

    return (
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minHeight='100vh'>
        <CircularProgress size={60} color='background' />
      </Box>
    );
  };
}

export default withPageDetails;
