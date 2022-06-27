import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Image from '../../svgs/background.svg';

export const AppBarStyled = styled(AppBar)(
  ({ theme }) => `
  background-image: url(${Image});
  position: relative;
`,
);

export const LeftFlowerStyled = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
`;

export const RightFlowerStyled = styled('img')`
  position: absolute;
  top: -1;
  right: 0;
  width: 80px;
`;

export const TitleStyled = styled('img')`
  width: 140px;
`;

export const ToolbarStyled = styled(Toolbar)`
  justifycontent: center;
`;
