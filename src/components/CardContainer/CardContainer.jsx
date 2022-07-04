import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';

import ItemCard from './ItemCard';
import { ItemCardGridStyled } from './styles';

function CardContainer(props) {
  const { data, loading } = props;

  return (
    <section>
      <Container maxWidth='1200' sx={{ mt: 2, mb: 4 }}>
        <Grid container wrap='wrap' justifyContent='center' spacing={3}>
          {(loading ? Array.from(new Array(4)) : data)?.map((card, index) => (
            <ItemCardGridStyled item key={index}>
              {card ? (
                <ItemCard data={card} />
              ) : (
                <Skeleton animation='wave' variant='rectangular' height={300} sx={{ borderRadius: '20px' }} />
              )}
            </ItemCardGridStyled>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default CardContainer;
