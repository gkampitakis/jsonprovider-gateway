import { Theme, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  root: {
    '&MuiGrid-grid-xs-3': {

    }
  },
  card: {
    height: 480,
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainGrid: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '93%',
    maxWidth: '50%',
    margin: 'auto'
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
    height: '20%',
    margin: 'auto'
  },
  progressBar: {
    height: '5px',
    width: '100%'
  },
  linkSession: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px"
  }
});

export default styles;