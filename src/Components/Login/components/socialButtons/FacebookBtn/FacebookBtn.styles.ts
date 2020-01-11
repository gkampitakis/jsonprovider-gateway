import { Theme, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  button: {
    borderRadius: '50px',
    width: '60px',
    height: '60px',
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.background.default
    },
    "&.Mui-disabled": {
      opacity: 0.5
    }
  },
  icon: {
    fontSize: 50,
    color: '#3B5998'
  }
});

export default styles;