import { Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: '10%',
      right: '5%',
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  });

export default styles;