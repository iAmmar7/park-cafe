import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['Jost', 'sans-serif'].join(','),
  },
  palette: {
    brown: '#D8A08F',
  },
});

export default theme;
