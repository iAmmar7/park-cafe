import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemCard(props) {
  const { data } = props;

  return (
    <Card sx={{ position: 'relative', borderRadius: '20px' }}>
      <CardMedia component='img' height='400' image={data.imageUrl} alt={data.description} />
      <CardContent sx={{ position: 'absolute', bottom: -10 }}>
        <Typography component='h6' sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '30px', md: '48px' } }}>
          {data.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
