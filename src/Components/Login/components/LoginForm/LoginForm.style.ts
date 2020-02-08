import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  formField: {
    width: '90%',
    margin: '15px 0 0 0',
    minHeight: '76px'
  },
  loginBtn: {
    width: '65%'
  },
  visibilityIcon: {
    cursor: 'pointer',
    opacity: '0.7',
    color: theme.palette.text.primary
  }
});

export default styles;