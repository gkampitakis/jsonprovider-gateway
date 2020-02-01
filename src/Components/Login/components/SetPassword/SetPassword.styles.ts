import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      display: 'flex',
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '100%',
      marginBottom: '5%'
    }
  });

export default styles;