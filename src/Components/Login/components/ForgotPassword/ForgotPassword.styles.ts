import { Theme, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  input: {
    width: '100%'
  },
  submitForm: {
    width: '100%',
    margin: 'auto',
    minHeight: '25%'
  }
});

export default styles;