import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { HeaderBackground } from '../../svgs';

export const AppBarStyled = styled(AppBar)(
  ({ theme }) => `
  background-image: url(${HeaderBackground});
  background-color: ${theme.palette.background};
  position: relative;
  padding-top: 4px;
  height: 82px;
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
  right: 0;
  width: 80px;
`;

export const TitleStyled = styled('img')`
  width: 140px;
`;

export const ToolbarStyled = styled(Toolbar)`
  justify-content: center;
`;
