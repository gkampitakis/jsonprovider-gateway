import { createMuiTheme } from '@material-ui/core/styles';

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
    },
    text: {
      primary: '#E0E0E0'
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
    },
    MuiLink: {
      root: {
        color: 'inherit'
      }
    },
    MuiFormLabel: {
      root: {
        color: '#E0E0E0',
        "&$focused": {
          color: "#E0E0E0"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#E0E0E0'
        },
        '&:focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#E0E0E0'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#E0E0E0'
        }
      },
      notchedOutline: {
        borderColor: '#E0E0E0'
      }
    },
    MuiInputBase: {
      root: {
        color: '#E0E0E0'
      }
    }
  },
  transitions: { create: () => '100ms linear' }
});