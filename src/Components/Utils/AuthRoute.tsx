import React from 'react';
import { Route, Redirect } from "react-router-dom";

export function AuthRoute({ component: Component, authorized, ...rest }: any) {
  return (<Route {...rest} render={
    (props: any) => authorized
      ? <Component />
      : <Redirect to='/login' />}
  />)
}