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
  visibilityIcon: {
    cursor: 'pointer',
    opacity: '0.7',
    color: theme.palette.text.primary
  }
});

export default styles;