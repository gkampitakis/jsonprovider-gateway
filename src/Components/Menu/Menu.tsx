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
//TODO: this will be absent when not logged in 
interface MenuProps {
  view: ViewState;
  toggleMenu: (param: boolean) => void;
}

const mapStateToProps = (state: State) => {
  return {
    view: state.view
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleMenu: (param: boolean) => dispatch(toggleMenu(param))
  };
}

class Menu extends Component<WithStyles<typeof styles> & MenuProps>{
  //TODO: implement here the hiding on login
  render = () => {
    const { classes, view } = this.props;
    //FIXME: header on top to have avatar and name and a menu like the previous we had
    return (
      <div className={classes.root}>
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
            {/* FIXME: this needs for themes */}
            <Link href="">Feedback</Link>
            <Link href="">About</Link>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));