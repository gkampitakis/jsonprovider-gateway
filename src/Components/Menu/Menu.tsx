import React, { Component } from 'react'
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { CssBaseline, Drawer, IconButton, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import styles from './Menu.styles';
import { ViewState } from "../../Store/Reducers/View/viewReducer";
import { State } from "../../Store/Reducers";
import { toggleMenu } from "../../Store/Actions/View/viewAction";
import { connect } from "react-redux";

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

  render = () => {
    const { classes, view } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));