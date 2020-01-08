import Button from "@material-ui/core/Button";
import React, { Component } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from './GoogleBtn.styles';

interface GoogleBtnProps {
  disabled: boolean;
}

class GoogleBtn extends Component<WithStyles<typeof styles> & GoogleBtnProps>{
  public render() {

    const { classes, disabled } = this.props;

    return (<Button disabled={disabled} className={classes.button}>
      <span style={{ fontSize: 20, color: '#4285F4' }}>G</span>
      <span style={{ fontSize: 20, color: '#EA4335' }}>o</span>
      <span style={{ fontSize: 20, color: '#FBBC05' }}>o</span>
      <span style={{ fontSize: 20, color: '#4285F4' }}>g</span>
      <span style={{ fontSize: 20, color: '#34A853' }}>l</span>
      <span style={{ fontSize: 20, color: '#EA4335' }}>e</span>
    </Button>)
  }
}

export default withStyles(styles)(GoogleBtn);