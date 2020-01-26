import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "./Header.styles";
import { State } from "../../Store/Reducers";
import { toggleMenu } from "../../Store/Actions/View/viewAction";
import { connect } from "react-redux";
import { ViewState } from "../../Store/Reducers/View/viewReducer";
import dark from '../../assets/darkLogo.svg';
import light from '../../assets/lightLogo.svg';

interface HeaderProps {
  view: ViewState;
  logged: boolean;
  toggleMenu: (param: boolean) => void;//TODO: this will be deprecated 
}

const mapStateToProps = (state: State) => {
  return {
    view: state.view,
    logged: state.authorization.authorized
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleMenu: (param: boolean) => dispatch(toggleMenu(param)) //TODO: this will be deprecated 
  };
}

class Header extends Component<WithStyles<typeof styles> & HeaderProps> {

  loggedView(classes: any, view: ViewState) {

    const logo = view.selectedTheme === 'darkTheme' ? dark : light;

    return (
      <Fragment>
        <img src={logo} className={classes.logoIcon} />
        <Typography className={classes.title} variant="h6" noWrap>
          Provider
</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            type="search"
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
        </div>
      </Fragment>)
  }

  loginPrompt(classes: any) {
    return (
      <Fragment>
        <Typography style={{ position: 'absolute' }} className={classes.title} variant="h6" noWrap>
          JSON Provider
</Typography>
        <Typography variant="h4" className={classes.mainTitle}>Login</Typography>
      </Fragment>
    )
  }

  public render() {
    const { classes, view, logged } = this.props;

    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            {logged ? this.loggedView(classes, view) : this.loginPrompt(classes)}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));