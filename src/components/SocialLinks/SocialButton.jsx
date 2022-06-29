import React from 'react';
import IconButton from '@mui/material/IconButton';

function SocialButton(props) {
  const { Icon, name, href } = props;

  if (!href) return null;

  const modHref = name === 'mail' ? `mailto:${href}` : href;

  return (
    <IconButton href={modHref} target='_blank' aria-label={name} size='large' sx={{ padding: 0 }}>
      <img src={Icon} alt={name} width={60} />
    </IconButton>
  );
}

export default SocialButton;
