import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { Login } from "../Application/Application";

export function AuthRoute({ component: Component, authorized, ...rest }: any) {
  return (<Route {...rest} render={
    () => authorized
      ? <Component />
      : <Login />}
  />)
}