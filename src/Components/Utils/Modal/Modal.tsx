import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from './Modal.styles';
import CloseIcon from '@material-ui/icons/Close';

interface ModalProps {
  open: boolean;
  loading: boolean;
  handleClose: () => void;
  title?: string;
  width?: number;
  height?: number;
  cssStyle?: {};
  //TODO: implement touched logic here for forms
}

const _Modal: React.FC<WithStyles<typeof styles> & ModalProps> = (props) => {

  const {
    classes,
    open,
    handleClose,
    children,
    width,
    height,
    title,
    cssStyle,
    loading = false,
  } = props;


  function controlledClose() {

    if (!loading) return handleClose()

    return () => { };

  }

  return (
    <Modal
      style={cssStyle}
      className={classes.modal}
      open={open}
      onClose={controlledClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div className={classes.paper} style={{ width, height }}>
          <div className={classes.header}>
            {!!title && <h2 className={classes.title}>{title}</h2>}
            <CloseIcon
              onClick={controlledClose}
              className={classes.closeIcon}
            />
          </div>
          {children}
        </div>
      </Slide>
    </Modal>
  );

};

_Modal.defaultProps = {
  loading: false
};

export default withStyles(styles)(_Modal);