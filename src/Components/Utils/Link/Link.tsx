import Link from "@material-ui/core/Link";
import React, { memo, FC, ReactNode } from "react";
//TODO: add handler

interface LinkProps {
  disabled: boolean;
  children?: ReactNode;
}

const disabledCSS = {
  opacity: "0.5",
  textDecoration: "none",
  cursor: "default"
};

const enabledCSS = {
  cursor: "pointer"
}

const _Link: FC<LinkProps> = (props) => {

  const { disabled } = props;

  return (<Link
    style={disabled ? disabledCSS : enabledCSS} >
    {props.children}
  </Link >);

};

export default memo(_Link);