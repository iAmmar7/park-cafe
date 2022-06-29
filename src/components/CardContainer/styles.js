import { styled } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';

export const CardActionAreaStyled = styled(CardActionArea)(
  ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
      background: transparent;
    }
    &:hover {
      opacity: 0.9
    }
`,
);
