import { styled } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

export const CardActionAreaStyled = styled(CardActionArea)(
  ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
      background: transparent;
    };
`,
);

export const ItemCardGridStyled = styled(Grid)(
  ({ theme }) => `
    width: 100%;
    @media screen and (min-width: 1000px) {
      width: 500px;
    }
`,
);

export const MainStyled = styled('main')`
  padding-top: 20px;
  padding-bottom: 40px;
  flex: 1;
  min-height: calc(100vh - 82px - 220px - 60px);
`;
