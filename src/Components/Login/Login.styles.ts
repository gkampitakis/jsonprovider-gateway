import { Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  card: {
    height: 350,
    minWidth: 275
  },
  mainGrid: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '95%'
  }
});

export default styles;