import React from 'react';
import Stack from '@mui/material/Stack';

import SocialButton from './SocialButton';
import { InstagramIcon, FacebookIcon, YoutubeIcon, MailIcon } from '../../svgs';

function SocialLinks(props) {
  const { page } = props;

  return (
    <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
      <SocialButton name='instagram' href={page.instagram} Icon={InstagramIcon} />
      <SocialButton name='facebook' href={page.facebook} Icon={FacebookIcon} />
      <SocialButton name='youtube' href={page.youtube} Icon={YoutubeIcon} />
      <SocialButton name='mail' href={page.email} Icon={MailIcon} />
    </Stack>
  );
}

export default SocialLinks;
