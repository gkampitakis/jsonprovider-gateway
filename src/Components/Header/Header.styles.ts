import { Theme, fade, createStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    title: {
      position: 'absolute',
      left: '120px',
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      border: '1px solid ' + theme.palette.primary.dark,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: '25%',
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: '25%',
        width: '50%'
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100%'
      }
    },
    mainTitle: {
      margin: 'auto'
    },
    logoIcon: {
      width: '90px',
      position: 'absolute'
    },
    logo: {
      display: 'contents',
      cursor: 'pointer'
    }
  });

export default styles;