import React, { useState, Children } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from './Modal.styles';
import CloseIcon from '@material-ui/icons/Close';

interface ModalProps {
  open?: boolean;//TODO: this ll be changed
  handleClose?: () => void;//TODO: this ll be changed
  title?: string;
}

const _Modal: React.FC<WithStyles<typeof styles> & ModalProps> = (props) => {

  const {
    classes,
    // open,
    // handleClose,
    children,
    title
  } = props;

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide direction="up" in={open}>
        {/* TODO: this classes can be dynamic */}
        <div className={classes.paper}>
          <div className={classes.header}>
            <h2 className={classes.title}>{title}</h2>
            <CloseIcon
              onClick={handleClose}
              className={classes.closeIcon}
            />
          </div>
          {children}
        </div>
      </Slide>
    </Modal>
  );

};

export default withStyles(styles)(_Modal);