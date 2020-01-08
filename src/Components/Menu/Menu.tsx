import React, { Component } from 'react'
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { CssBaseline, Drawer, IconButton, Divider, List, ListItem, ListItemText, ListItemIcon, Link } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import styles from './Menu.styles';
import { ViewState } from "../../Store/Reducers/View/viewReducer";
import { State } from "../../Store/Reducers";
import { toggleMenu } from "../../Store/Actions/View/viewAction";
import { connect } from "react-redux";
//TODO: in the future decide what will exist in here and connect it to router

interface MenuProps {
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

class Menu extends Component<WithStyles<typeof styles> & MenuProps>{

  private menu(classes: any, view: ViewState) {
    return (
      <div className={classes.root} >
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          color="primary"
          open={view.menu.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => this.props.toggleMenu(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button key={"Home"}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key={"Documents"}>
              <ListItemIcon><FolderIcon /></ListItemIcon>
              <ListItemText primary="Documents" />
            </ListItem>
          </List>
          <Divider />
          <div className={classes.menuFooter}>
            <Link href="">Bugs</Link>
            <Link href="">Feedback</Link>
            <Link href="">About</Link>
          </div>
        </Drawer>
      </div>
    )
  }

  render = () => {
    const { classes, view, logged } = this.props;
    //FIXME: header on top to have avatar and name and a menu like the previous we had
    return logged ? this.menu(classes, view) : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));