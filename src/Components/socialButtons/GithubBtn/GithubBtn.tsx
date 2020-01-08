import Button from "@material-ui/core/Button";
import React, { Component } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './GithubBtn.styles';

interface GithubBtnProps {
  disabled: boolean;
}

class GithubBtn extends Component<WithStyles<typeof styles> & GithubBtnProps>{
  public render() {

    const { classes, disabled } = this.props;

    return (<Button
      disabled={disabled}
      className={classes.button}>
      <GitHubIcon className={classes.icon} />
    </Button>)
  }
}

export default withStyles(styles)(GithubBtn);