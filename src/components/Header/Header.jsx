import React from 'react';
import Toolbar from '@mui/material/Toolbar';

import { AppBarStyled, LeftFlowerStyled, RightFlowerStyled, TitleStyled } from './styles';
import LeftFlowerIcon from '../../svgs/left-flower.svg';
import RightFlowerIcon from '../../svgs/right-flower.svg';
import TitleIcon from '../../svgs/title.svg';

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
