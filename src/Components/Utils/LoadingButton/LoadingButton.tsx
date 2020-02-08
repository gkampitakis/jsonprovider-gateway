import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

interface LoadingButtonProps {
  loading: boolean;
  loaderSize?: number;
  disabled?: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps & ButtonProps> = (props) => {

  const { children, loading, loaderSize, disabled, ...rest } = props;

  return (
    <Button
      {...rest}
      disabled={loading || disabled}
    >
      {loading ?
        <CircularProgress color="secondary" size={loaderSize} /> :
        children
      }
    </Button>
  );

};

LoadingButton.defaultProps = {
  loaderSize: 24
};

export default LoadingButton;