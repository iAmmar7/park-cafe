import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import { CardActionAreaStyled } from './styles';

function ItemCard(props) {
  const { palette } = useTheme();
  const { data } = props;

  return (
    <Card sx={{ position: 'relative', borderRadius: '20px', boxShadow: 3 }}>
      <CardActionAreaStyled component='a' href={data.link} target='_blank'>
        <CardMedia component='img' height='400' image={data.imageUrl} alt={data.description} />
        <CardContent sx={{ position: 'absolute', bottom: -10 }}>
          <Typography component='h6' color='white' fontWeight={700} fontSize={{ xs: '30px', md: '48px' }}>
            {data.title}
          </Typography>
        </CardContent>
        {data.label && (
          <CardContent sx={{ position: 'absolute', top: 0, right: 0 }}>
            <Box
              maxWidth={{ xs: 100, md: 200 }}
              p={{ xs: 2, md: 1 }}
              textAlign='center'
              sx={{ backgroundColor: palette.brown, borderRadius: '50%' }}
            >
              <Typography component='h6' color='white' fontStyle='italic' fontSize={{ xs: '20px', md: '28px' }}>
                {data.label}
              </Typography>
            </Box>
          </CardContent>
        )}
      </CardActionAreaStyled>
    </Card>
  );
}

export default ItemCard;
