import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ItemCard from './ItemCard';
import { SectionStyled } from './styles';

function CardContainer(props) {
  const { data, loading } = props;

  return (
    <SectionStyled>
      <Container maxWidth='1200' sx={{ mt: 3, mb: 6 }}>
        <Grid container wrap='wrap' justifyContent='center' spacing={{ xs: 1, sm: 2 }}>
          {(loading ? Array.from(new Array(5)) : data)?.map((card, index) => (
            <Box key={index} xs={12} sm={6} md={4} lg={3} sx={{ width: '300px', m: 1 }}>
              {card ? (
                <>
                  <ItemCard data={card} />
                </>
              ) : (
                <Skeleton animation='wave' variant='rectangular' height={300} sx={{ borderRadius: '20px' }} />
              )}
            </Box>
          ))}
        </Grid>
      </Container>
    </SectionStyled>
  );
}

export default CardContainer;
