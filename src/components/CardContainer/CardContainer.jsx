import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';

import ItemCard from './ItemCard';
import { MainStyled, ItemCardGridStyled } from './styles';

function CardContainer(props) {
  const { data, loading } = props;

  return (
    <MainStyled>
      <Container maxWidth={false} sx={{ maxWidth: '1600px' }}>
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
    </MainStyled>
  );
}

export default CardContainer;
