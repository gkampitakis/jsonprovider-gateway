import React, { Component } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from './Login.styles';
import { connect } from "react-redux";
import { State } from "../../Store/Reducers";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinearProgress from '@material-ui/core/LinearProgress';

const mapStateToProps = (state: State) => {
  return {

  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {

  };
}

class Login extends Component<WithStyles<typeof styles>>{
  render() {
    const { classes } = this.props;

    return <Grid container justify={"center"} alignContent={'center'} className={classes.mainGrid}>
      <Grid item xs={4} style={{ marginBottom: '10%' }}>
        <Card className={classes.card} >
          <form style={{ padding: '0 5px' }}>
            <TextField
              className={classes.formField}
              required
              id="email"
              label="Email"
              variant="outlined"
            // error={true}
            // helperText={'Wrong Password'}
            />
            <TextField
              className={classes.formField}
              required
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            // error={true}
            // helperText={'Wrong Password'}
            />
            <Button className={classes.loginBtn} variant="contained">
              Login
              </Button>
          </form>
          <span className={classes.ORDivider}>OR</span>
          <Divider className={classes.divider} />
          <span>Login with:</span>
          <div className={classes.mediaBtns}>
            <Button className={classes.gglBtn}>
              <span style={{ fontSize: 20, color: '#4285F4' }}>G</span>
              <span style={{ fontSize: 20, color: '#EA4335' }}>o</span>
              <span style={{ fontSize: 20, color: '#FBBC05' }}>o</span>
              <span style={{ fontSize: 20, color: '#4285F4' }}>g</span>
              <span style={{ fontSize: 20, color: '#34A853' }}>l</span>
              <span style={{ fontSize: 20, color: '#EA4335' }}>e</span>
            </Button>
            <Button className={classes.fbBtn}><FacebookIcon className={classes.fbIcon} /></Button>
            <Button className={classes.gitBtn}><GitHubIcon className={classes.gitIcon} /></Button>
          </div>
        </Card>
        {false && <LinearProgress color="secondary" />}
      </Grid>
    </Grid >
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));