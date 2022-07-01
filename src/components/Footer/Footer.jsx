import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material';

import SocialLinks from '../SocialLinks/SocialLinks';
import { HeaderBackground, FooterFlowerIcon } from '../../svgs';
import { FooterStyled } from './styles';

function Footer(props) {
  const { page } = props;
  const { palette } = useTheme();

  return (
    <FooterStyled>
      <SocialLinks page={page} />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        mt={2}
        pb={1}
        sx={{ backgroundImage: `url(${HeaderBackground})`, backgroundColor: palette.background }}
      >
        <Box>
          <img src={FooterFlowerIcon} alt='footer-flower' width={200} />
        </Box>
        <Stack direction='row' divider={<Divider orientation='vertical' flexItem color='white' />} spacing={1}>
          <Typography variant='h5' color='white' fontStyle='italic'>
            Parkcafé
          </Typography>
          <Typography
            variant='h5'
            color='white'
            fontStyle='italic'
            component={Link}
            href={page.imprint}
            target='_blank'
            sx={{ textDecoration: 'none' }}
          >
            Impressum
          </Typography>
          <Typography
            variant='h5'
            color='white'
            fontStyle='italic'
            component={Link}
            href={page.privacy}
            target='_blank'
            sx={{ textDecoration: 'none' }}
          >
            Datenschutz
          </Typography>
        </Stack>
      </Box>
    </FooterStyled>
  );
}

export default Footer;
