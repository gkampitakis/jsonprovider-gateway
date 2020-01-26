import { Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: '10%',
      right: '5%',
      display: 'flex',
      width: '70px',
      height: '70px'
    }
  });

export default styles;