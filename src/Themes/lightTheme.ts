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
          border: '1px solid #858585'
        },
        '&.Mui-error': {
          color: 'red'
        },
        borderColor: '#858585',
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
        color: '#858585',
        "&$focused": {
          color: "#858585"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#858585'
        },
        '&:focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#858585'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#858585'
        },
        '&.Mui-error': {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red'
          },
          '&:focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red'
          }
        }
      },
      notchedOutline: {
        borderColor: '#858585'
      }
    }
  },
  transitions: { create: () => '100ms linear' }
});