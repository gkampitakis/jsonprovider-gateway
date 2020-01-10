import Button from "@material-ui/core/Button";
import React, { FC, memo } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from './FacebookBtn.styles';

interface FacebookBtnProps {
  disabled: boolean;
}

const FacebookBtn: FC<WithStyles<typeof styles> & FacebookBtnProps> = (props) => {

  const { classes, disabled } = props;

  return (<Button
    disabled={disabled}
    className={classes.button}>
    <FacebookIcon className={classes.icon} />
  </Button>)

}

export default memo(withStyles(styles)(FacebookBtn));