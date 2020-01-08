import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Add from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "./Header.styles";
import { State } from "../../Store/Reducers";
import { toggleMenu } from "../../Store/Actions/View/viewAction";
import { connect } from "react-redux";
import { ViewState } from "../../Store/Reducers/View/viewReducer";
import Button from "@material-ui/core/Button";

interface HeaderProps {
  view: ViewState;
  logged: boolean;
  toggleMenu: (param: boolean) => void;
}

const mapStateToProps = (state: State) => {
  return {
    view: state.view,
    logged: state.authorization.authorized
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleMenu: (param: boolean) => dispatch(toggleMenu(param))
  };
}

class Header extends Component<WithStyles<typeof styles> & HeaderProps> {

  loggedView(classes: any, view: ViewState) {
    return (
      <Fragment>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => this.props.toggleMenu(!view.menu.open)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          JSON Provider
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
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.newButton}
            endIcon={<Add />}
          >
            Create JSON
    </Button>
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