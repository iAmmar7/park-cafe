import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import SocialLinks from '../SocialLinks/SocialLinks';
import { HeaderBackground, FooterFlowerIcon } from '../../svgs';

function Footer(props) {
  const { page } = props;

  return (
    <footer>
      <SocialLinks page={page} />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        mt={2}
        pb={1}
        sx={{ backgroundImage: `url(${HeaderBackground})`, backgroundColor: '#3A3B39', height: '135px' }}
      >
        <Box>
          <img src={FooterFlowerIcon} alt='footer-flower' width={200} />
        </Box>
        <Stack direction='row' divider={<Divider orientation='vertical' flexItem color='white' />} spacing={1}>
          <Typography variant='h5' color='white' fontStyle='italic'>
            Parkcafé
          </Typography>
          <Typography variant='h5' color='white' fontStyle='italic'>
            Impressum
          </Typography>
          <Typography variant='h5' color='white' fontStyle='italic'>
            Datenschutz
          </Typography>
        </Stack>
      </Box>
    </footer>
  );
}

export default Footer;
