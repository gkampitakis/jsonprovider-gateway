import React, { useState, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "./Header.styles";
import { State } from "../../Store/Reducers";
import { connect } from "react-redux";
import { ViewState } from "../../Store/Reducers/View/viewReducer";
import dark from '../../assets/darkLogo.svg';
import light from '../../assets/lightLogo.svg';
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router";
import Menu from './components/Menu';

interface HeaderProps {
  view: ViewState;
  logged: boolean;
}

const mapStateToProps = (state: State) => {
  return {
    view: state.view,
    logged: state.authorization.authorized
  };
};

const Header: React.FC<WithStyles<typeof styles> & HeaderProps> = (props) => {

  const [anchorElem, setAnchorElem] = useState<null | HTMLElement>(null),
    history = useHistory();

  const { classes, view, logged } = props,
    logo = view.selectedTheme === 'darkTheme' ?
      dark :
      light;

  function returnHome() {

    history.push('/');

  }

  function closeMenu() {

    setAnchorElem(null);

  }

  function renderLogo() {
    return <div className={classes.logo} onClick={returnHome}>
      <img src={logo} className={classes.logoIcon} alt="LogoIcon" />
      <Typography className={classes.title} variant="h6" noWrap>
        Provider
        </Typography>
    </div>
  }

  function loggedView() {

    return (
      <Fragment>
        {renderLogo()}
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
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            <AccountCircle />
          </IconButton>
        </div>
        <Menu
          isMenuOpen={!!anchorElem}
          anchorElem={anchorElem}
          closeMenu={closeMenu}
        />
      </Fragment>);
  }

  function loginPrompt() {

    return (
      <Fragment>
        {renderLogo()}
        <Typography variant="h4" className={classes.mainTitle}>{view.headerTitle}</Typography>
      </Fragment>
    );

  }

  function handleClick(event: React.MouseEvent<HTMLElement>) {

    setAnchorElem(event.currentTarget);

  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {
            logged ?
              loggedView() :
              loginPrompt()
          }
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default connect(mapStateToProps)(withStyles(styles)(Header));