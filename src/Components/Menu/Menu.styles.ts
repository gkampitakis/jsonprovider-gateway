import { Theme, createStyles } from "@material-ui/core";

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    menuFooter: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-around',
      paddingBottom: '10px'
    }
  });


export default styles;