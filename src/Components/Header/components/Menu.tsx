
import React from 'react'
import Menu from "@material-ui/core/Menu";
import MenuItem from '../components/MenuItem';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from './Menu.styles'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../../Store/Actions/Authorization/authAction";

interface MenuProps {
  isMenuOpen: boolean;
  anchorElem: null | HTMLElement;
  closeMenu: () => void;
  dispatchLogout: () => void;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchLogout: () => dispatch(logout())
  }
};

const _Menu: React.FC<WithStyles<typeof styles> & MenuProps> = (props) => {

  const { isMenuOpen, anchorElem, closeMenu, classes, dispatchLogout } = props,
    history = useHistory();


  function logout() {

    closeMenu();
    history.push('/');
    dispatchLogout();

  }

  return (
    <Menu
      className={classes.menu}
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      anchorEl={anchorElem}
      id={'Header-Menu'}
      keepMounted
      open={isMenuOpen}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>
        <PersonIcon fontSize="small" />
        Account
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        <SettingsIcon fontSize="small" />
        Settings
      </MenuItem>
      <MenuItem onClick={logout}>
        <MeetingRoomIcon fontSize="small" />
        Log out
      </MenuItem>
    </Menu>
  );

};

export default connect(null, mapDispatchToProps)(withStyles(styles)(_Menu));