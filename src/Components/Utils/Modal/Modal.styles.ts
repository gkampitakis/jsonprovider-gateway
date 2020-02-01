import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      outline: 'none',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minWidth: '30%',
      minHeight: '20%',
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      marginTop: '0px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    closeIcon: {
      cursor: 'pointer'
    }
  });

export default styles;