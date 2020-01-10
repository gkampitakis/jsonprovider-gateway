import Button from "@material-ui/core/Button";
import React, { FC, memo } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './GithubBtn.styles';

interface GithubBtnProps {
  disabled: boolean;
}

const GithubBtn: FC<WithStyles<typeof styles> & GithubBtnProps> = (props) => {

  const { classes, disabled } = props;

  return (<Button
    disabled={disabled}
    className={classes.button}>
    <GitHubIcon className={classes.icon} />
  </Button>)

}

export default memo(withStyles(styles)(GithubBtn));