import React, { Component } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from './Login.styles';
import { connect } from "react-redux";
import { State } from "../../Store/Reducers";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";

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

    return <Grid container className={classes.mainGrid}>
      <Grid item xs={5}>
        <Card className={classes.card}></Card>
      </Grid>
    </Grid >
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));