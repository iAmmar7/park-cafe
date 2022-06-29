import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ItemCard from './ItemCard';

function CardContainer(props) {
  const { data, loading } = props;

  return (
    <section>
      <Container maxWidth='1200' sx={{ mt: 3, mb: 6, minHeight: '90vh' }}>
        <Grid
          container
          wrap='wrap'
          justifyContent='center'
          spacing={{ xs: 1, sm: 2, md: 2 }}
          px={{ xs: 1, sm: 2, md: 4 }}
        >
          {(loading ? Array.from(new Array(5)) : data)?.map((card, index) => (
            <Box key={index} xs={12} sm={6} md={4} lg={3} sx={{ width: '500px', m: 1 }}>
              {card ? (
                <>
                  <ItemCard data={card} />
                </>
              ) : (
                <Skeleton animation='wave' variant='rectangular' height={400} sx={{ borderRadius: '20px' }} />
              )}
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default CardContainer;
