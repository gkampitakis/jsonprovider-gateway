import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    submitBtn: {
      width: '40%',
      margin: '0 auto'
    },
    mainGrid: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-evenly'
    }
  });

export default styles;