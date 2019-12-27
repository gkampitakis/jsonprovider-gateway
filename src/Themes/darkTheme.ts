import { createMuiTheme } from '@material-ui/core/styles';

//TODO: expand it

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#121212'
    },
    secondary: {
      main: '#BB86FC',
      contrastText: '#000000'
    },
    background: {
      default: '#2E2E2E',
      paper: '#383838'
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        color: '#FFFFFF'
      }
    },
    MuiDivider: {
      root: {
        color: '#121212'
      }
    },
    MuiIconButton: {
      root: {
        color: '#FFFFFF'
      }
    },
    MuiListItemIcon: {
      root: {
        color: '#FFFFFF'
      }
    }
  }
});