import React from 'react';
import Toolbar from '@mui/material/Toolbar';

import { LeftFlowerIcon, RightFlowerIcon, TitleIcon } from '../../svgs';
import { AppBarStyled, LeftFlowerStyled, RightFlowerStyled, TitleStyled } from './styles';

function Header() {
  return (
    <header>
      <AppBarStyled>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <LeftFlowerStyled src={LeftFlowerIcon} alt='flower' />
          <TitleStyled src={TitleIcon} alt='title' />
          <RightFlowerStyled src={RightFlowerIcon} alt='flower' />
        </Toolbar>
      </AppBarStyled>
    </header>
  );
}

export default Header;
