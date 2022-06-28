import Grid from '@mui/material/Grid';
import React from 'react';

import ItemCard from './ItemCard';
import { isEmpty } from '../../utils/helpers';

function CardContainer(props) {
  const { data } = props;

  if (isEmpty(data)) return;

  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2, md: 2 }}
      my={{ xs: 1, sm: 2, md: 1, lg: 0 }}
      px={{ xs: 1, sm: 2, md: 4 }}
      justifyContent='center'
      flexWrap='wrap'
    >
      {data.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
          <ItemCard data={card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardContainer;
