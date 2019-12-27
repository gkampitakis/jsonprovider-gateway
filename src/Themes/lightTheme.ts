import { createMuiTheme } from '@material-ui/core/styles';

//TODO: expand it

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#40A7dc',
      contrastText: '#FFFFFF'
    }
  },
  overrides: {
    MuiInputBase: {
      root: {
        border: '1px solid #D9D9D9',
        borderRadius: '4px'
      }
    }
  }
});