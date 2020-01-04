import { Theme, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  card: {
    height: 430,
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainGrid: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '95%'
  },
  formField: {
    width: '100%',
    margin: '15px 0 0 0',
    minHeight: '76px'
  },
  loginBtn: {
    width: '65%'
  },
  ORDivider: {
    opacity: '0.7',
    color: theme.palette.text.primary,
    marginTop: '20px',
    marginBottom: '10px'
  },
  divider: {
    width: '100%',
    marginBottom: '10px'
  },
  mediaBtns: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: '25%',
    marginTop: '15px'
  },
  gitBtn: {
    border: '0.5px solid' + theme.palette.text.primary,
    borderRadius: '50px',
    width: '100px',
    height: '100px',
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.background.default
    }
  },
  gitIcon: {
    fontSize: 80,
    color: 'black'
  },
  fbBtn: {
    borderRadius: '50px',
    border: '0.5px solid' + theme.palette.text.primary,
    width: '100px',
    height: '100px',
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.background.default
    }
  },
  fbIcon: {
    fontSize: 80,
    color: '#3B5998'
  },
  gglBtn: {
    border: '0.5px solid' + theme.palette.text.primary,
    borderRadius: '50px',
    width: '100px',
    height: '100px',
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.background.default
    }
  }
});

export default styles;