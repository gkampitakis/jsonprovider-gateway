import { createMuiTheme } from '@material-ui/core/styles';

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
        '&.Header-inputRoot-6': {
          border: '1px solid #D9D9D9'
        },
        borderColor: '#D9D9D9',
        borderRadius: '4px'
      }
    },
    MuiLink: {
      root: {
        color: 'inherit'
      }
    },
    MuiFormLabel: {
      root: {
        color: '#D9D9D9',
        "&$focused": {
          color: "#D9D9D9"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#D9D9D9'
        },
        '&:focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#D9D9D9'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#D9D9D9'
        }
      },
      notchedOutline: {
        borderColor: '#D9D9D9'
      }
    }
  },
  transitions: { create: () => '100ms linear' }
});