import React, { Component } from 'react';
import { withStyles, WithStyles, Fab } from "@material-ui/core";
import styles from './CreateBtn.styles';
import AddIcon from '@material-ui/icons/Add';

class CreateBtn extends Component<WithStyles<typeof styles>>{


  public render() {

    const { classes } = this.props;

    return (<Fab
      className={classes.fab}
      color="secondary"
      aria-label="add"
      size="large"
    >
      <AddIcon />
    </Fab>)
  }

}

export default withStyles(styles)(CreateBtn);