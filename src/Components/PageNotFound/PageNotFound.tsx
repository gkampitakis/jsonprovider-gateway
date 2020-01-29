import React, { memo } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './PageNotFound.styles';
import Button from '@material-ui/core/Button';
import notFoundLogo from '../../assets/404.png';
import { useHistory } from "react-router-dom";

const PageNotFound: React.FC<WithStyles<typeof styles>> = (props) => {

  const { classes } = props,
    history = useHistory();

  function returnHome() {

    history.push('/');

  }

  return (
    <div className={classes.mainGrid}>
      <span className={classes.Lcode}>4</span>
      <img className={classes.image} src={notFoundLogo} />
      <span className={classes.Rcode}>4</span>
      <h2 className={classes.header}>OOPS! PAGE NOT FOUND</h2>
      <p className={classes.message}>
        Sorry but the page you are looking for does not exist, has been removed. name changed or is temporarily unavailable
      </p>
      <Button variant="outlined" onClick={returnHome} color="secondary">Return Home</Button>
    </div >);

};

export default memo(withStyles(styles)(PageNotFound));