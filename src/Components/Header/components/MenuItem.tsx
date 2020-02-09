import React, { Fragment, forwardRef } from 'react'
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

interface _MenuItemProps {
  onClick: () => void;
}

const _MenuItem: React.FC<_MenuItemProps> = forwardRef((props, ref) => {

  const { children, ...rest } = props;

  return (
    <MenuItem  {...rest}>
      <ListItemIcon
        style={{
          width: '100%',
          justifyContent: 'space-around'
        }}
      >
        <Fragment>
          {children}
        </Fragment>
      </ListItemIcon>
    </MenuItem>
  );

});

export default _MenuItem;