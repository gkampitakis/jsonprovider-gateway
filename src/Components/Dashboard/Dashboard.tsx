import React, { Component } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from './Dashboard.styles';
import { connect } from "react-redux";
import { State } from "../../Store/Reducers";

const mapStateToProps = (state: State) => {
  return {

  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {

  };
}

class Dashboard extends Component<WithStyles<typeof styles>>{

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));