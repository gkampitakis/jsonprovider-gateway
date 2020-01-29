import { createStyles, Theme } from "@material-ui/core";


const styles = (theme: Theme) =>
  createStyles({
    menu: {
      '& .MuiMenu-paper': {
        width: '150px',
        border: '1px solid ' + theme.palette.primary.dark
      }
    }
  });

export default styles;