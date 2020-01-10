import React, { memo } from 'react';
import { withStyles, WithStyles, Fab } from "@material-ui/core";
import styles from './CreateBtn.styles';
import AddIcon from '@material-ui/icons/Add';

const CreateBtn: React.FC<WithStyles<typeof styles>> = (props) => {

  const { classes } = props;

  return (<Fab
    className={classes.fab}
    color="secondary"
    aria-label="add"
    size="large"
  >
    <AddIcon />
  </Fab>);

};

export default memo(withStyles(styles)(CreateBtn));