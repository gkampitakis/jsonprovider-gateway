import React, { useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './Login.styles';
import { connect } from 'react-redux';
import { State } from '../../Store/Reducers';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import GoogleBtn from './components/SocialButtons/GoogleBtn/GoogleBtn';
import GithubBtn from './components/SocialButtons/GithubBtn/GithubBtn';
import FacebookBtn from './components/SocialButtons/FacebookBtn/FacebookBtn';
import { loginRequest } from '../../Store/Actions/Authorization/authAction';
import Link from '../Utils/Link/Link';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './components/Register/Register';
import LoginForm from './components/LoginForm/LoginForm';

const mapStateToProps = (state: State) => {
  return {
    loading: state.loading.status
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginAttempt: (email: string, password: string) => dispatch(loginRequest(email, password))
  };
}

interface LoginProps {
  loading: boolean;
  loginAttempt: (email: string, password: string) => void;
}

const Login: React.FC<WithStyles<typeof styles> & LoginProps> = (props) => {

  const { classes, loading, loginAttempt } = props,
    [forgotPasswordModal, setForgotPasswordModal] = useState(false),
    [registerModal, setRegisterModal] = useState(false);

  return <Grid container className={classes.mainGrid}>
    <Grid item xs={"auto"} style={{ marginBottom: '10%' }}>
      <Card className={classes.card} >
        <LoginForm
          loading={loading}
          formHandler={loginAttempt}
        />
        <Grid item className={classes.linkSession}>
          <Link disabled={loading} onClick={() => setRegisterModal(true)}>New here? Register</Link>
          <Link disabled={loading} onClick={() => setForgotPasswordModal(true)}>Forgot Password</Link>
        </Grid>
        <span className={classes.ORDivider}>OR</span>
        <Divider className={classes.divider} />
        <span>Login with:</span>
        <div className={classes.mediaBtns}>
          <GoogleBtn disabled={loading} />
          <FacebookBtn disabled={loading} />
          <GithubBtn disabled={loading} />
        </div>
        <LinearProgress style={loading ? {} : { visibility: "hidden" }} className={classes.progressBar} color="secondary" />
      </Card>
      <ForgotPassword
        open={forgotPasswordModal}
        handleClose={() => setForgotPasswordModal(false)}
      />
      <Register
        open={registerModal}
        handleClose={() => setRegisterModal(false)}
      />
    </Grid>
  </Grid >

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));