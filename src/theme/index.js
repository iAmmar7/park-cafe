import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['Futura Lt BT', 'sans-serif'].join(','),
  },
  palette: {
    brown: '#D8A08F',
    background: '#3A3B39',
  },
});

export default theme;
