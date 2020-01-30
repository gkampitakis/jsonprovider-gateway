import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './ErrorBoundary.styles';
import Button from '@material-ui/core/Button';
import notFoundLogo from '../../assets/404.png';
import Link from '@material-ui/core/Link';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ErrorBoundaryProps {

}

class ErrorBoundary extends Component<ErrorBoundaryProps & WithStyles<typeof styles> & RouteComponentProps> {

  public constructor(props: any) {

    super(props);
    autoBind(this);

  }

  private returnHome() {

    this.setState({ hasError: false });
    this.props.history.push('/');

  }

  state = { hasError: false };

  static getDerivedStateFromError(error: any) {

    return { hasError: true };

  }

  componentDidCatch(error: any, errorInfo: any) {

    console.error(error, errorInfo);;

  }

  renderErrorPage() {

    const { classes } = this.props;

    return (
      <div className={classes.mainGrid}>
        <span className={classes.Lcode}>5</span>
        <img className={classes.image} src={notFoundLogo} />
        <span className={classes.Rcode}>0</span>
        <h2 className={classes.header}>OOPS! AN ERROR OCCURRED</h2>
        <p className={classes.message}>
          An unexpected error occurred. If this error persists you can contact <Link href="https://gkampitakis.github.io/">George Kampitakis</Link>
        </p>
        <Button variant="outlined" onClick={this.returnHome} color="secondary">Return Home</Button>
      </div>
    );

  }

  render() {

    if (this.state.hasError)
      return this.renderErrorPage();


    return this.props.children;
  }
}

export default withRouter(withStyles(styles)(ErrorBoundary));