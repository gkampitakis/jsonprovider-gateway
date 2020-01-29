import React, { memo } from 'react';
import { withStyles, WithStyles, Fab } from '@material-ui/core';
import styles from './CreateBtn.styles';
import AddIcon from '@material-ui/icons/Add';

interface CreateBtnProps {
  authorized: boolean;
}

const CreateBtn: React.FC<WithStyles<typeof styles> & CreateBtnProps> = (props) => {

  const { classes, authorized } = props;

  const button = (<Fab
    className={classes.fab}
    color="secondary"
    aria-label="add"
    size="large"
  >
    <AddIcon />
  </Fab>)

  return authorized ? button : null;

};

export default memo(withStyles(styles)(CreateBtn));