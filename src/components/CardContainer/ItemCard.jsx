import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import YouTubeVideo from './YouTubeVideo';
import { CardActionAreaStyled } from './styles';

function ItemCard(props) {
  const { palette } = useTheme();
  const { data } = props;

  const isVideo = data.type === 'video';

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: '20px',
        transition: 'all .5s',
        ...(!isVideo && {
          '&:hover': { opacity: 0.9, borderRadius: '20px' },
        }),
      }}
    >
      {isVideo ? (
        <YouTubeVideo link={data.video} title={data.description} sx={{ border: 'none' }} />
      ) : (
        <CardActionAreaStyled component='a' href={data.link} target='_blank'>
          <CardMedia component='img' height={300} image={data.imageUrl} alt={data.description} />
          <CardContent sx={{ position: 'absolute', bottom: -10 }}>
            <Typography component='h6' color='white' fontWeight={700} fontSize={{ xs: '28px', sm: '36px' }}>
              {data.title}
            </Typography>
          </CardContent>
          {data.label && (
            <CardContent sx={{ position: 'absolute', top: 0, right: 0 }}>
              <Box
                maxWidth={{ xs: 100, sm: 150 }}
                p={{ xs: 2, sm: 1 }}
                textAlign='center'
                sx={{ backgroundColor: palette.brown, borderRadius: '50%' }}
              >
                <Typography component='h6' color='white' fontStyle='italic' fontSize={{ xs: '16px', sm: '24px' }}>
                  {data.label}
                </Typography>
              </Box>
            </CardContent>
          )}
        </CardActionAreaStyled>
      )}
    </Card>
  );
}

export default ItemCard;
