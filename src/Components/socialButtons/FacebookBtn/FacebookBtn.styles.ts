import { Theme, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  button: {
    borderRadius: '50px',
    border: '0.5px solid' + theme.palette.text.primary,
    width: '100px',
    height: '100px',
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.background.default
    },
    "&.Mui-disabled": {
      opacity: 0.5
    }
  },
  icon: {
    fontSize: 80,
    color: '#3B5998'
  }
});

export default styles;