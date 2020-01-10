import Button from "@material-ui/core/Button";
import React, { Component } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from './FacebookBtn.styles';

interface FacebookBtnProps {
  disabled: boolean;
}

class FacebookBtn extends Component<WithStyles<typeof styles> & FacebookBtnProps>{
  public render() {

    const { classes, disabled } = this.props;

    return (<Button
      disabled={disabled}
      className={classes.button}>
      <FacebookIcon className={classes.icon} />
    </Button>)
  }
}

export default withStyles(styles)(FacebookBtn);