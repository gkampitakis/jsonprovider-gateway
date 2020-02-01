import React, { memo, useEffect } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './PageNotFound.styles';
import Button from '@material-ui/core/Button';
import notFoundLogo from '../../assets/404.png';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setHeaderTitle } from '../../Store/Actions/View/viewAction';

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    setHeaderTitle: (title: string) => dispatch(setHeaderTitle(title))
  }

}

interface PageNotFoundProps {
  setHeaderTitle: (title: string) => void;
}

const PageNotFound: React.FC<WithStyles<typeof styles> & PageNotFoundProps> = (props) => {

  const { setHeaderTitle, classes } = props,
    history = useHistory();

  useEffect(() => {

    setHeaderTitle('Page Not Found');

    return () => {

      setHeaderTitle('Login');

    };
  });

  function returnHome() {

    history.push('/');

  }

  return (
    <div className={classes.mainGrid}>
      <span className={classes.Lcode}>4</span>
      <img alt="NotFound" className={classes.image} src={notFoundLogo} />
      <span className={classes.Rcode}>4</span>
      <h2 className={classes.header}>OOPS! PAGE NOT FOUND</h2>
      <p className={classes.message}>
        Sorry but the page you are looking for does not exist, has been removed. name changed or is temporarily unavailable
      </p>
      <Button variant="outlined" onClick={returnHome} color="secondary">Return Home</Button>
    </div >);

};

export default connect(null, mapDispatchToProps)(memo(withStyles(styles)(PageNotFound)));