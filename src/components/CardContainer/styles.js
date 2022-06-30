import { styled } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';

export const CardActionAreaStyled = styled(CardActionArea)(
  ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
      background: transparent;
    };
    transition: all .5s;
    &:hover {
      opacity: 0.9;
    }
`,
);

export const SectionStyled = styled('section')`
  min-height: calc(100vh - 82px - 220px - 8px);
`;
