import Link from '@material-ui/core/Link';
import React, { memo, FC, ReactNode } from 'react';

interface LinkProps {
  disabled: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const disabledCSS = {
  opacity: '0.5',
  textDecoration: 'none',
  cursor: 'default'
};

const enabledCSS = {
  cursor: 'pointer'
}

const _Link: FC<LinkProps> = (props) => {

  const { disabled, onClick } = props;

  return (<Link
    onClick={onClick}
    style={disabled ? disabledCSS : enabledCSS} >
    {props.children}
  </Link >);

};

export default memo(_Link);