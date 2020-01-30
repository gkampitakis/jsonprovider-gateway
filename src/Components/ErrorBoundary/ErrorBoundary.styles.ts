import { createStyles, Theme } from "@material-ui/core";


const styles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: '10%',
      userDrag: 'none',
      userSelect: 'none'
    },
    image: {
      width: '125px',
      userDrag: 'none'
    },
    Lcode: {
      fontWeight: 700,
      fontSize: '145px',
      fontFamily: 'Montserrat, sans-serif',
      margin: '0px',
      position: 'relative',
      top: '10px',
      right: '-18px',
      zIndex: -5
    },
    Rcode: {
      fontWeight: 700,
      fontSize: '145px',
      fontFamily: 'Montserrat, sans-serif',
      margin: '0px',
      position: 'relative',
      top: '10px',
      left: '-22px',
      zIndex: -5
    },
    message: {
      fontFamily: 'Montserrat, sans-serif',
      opacity: 0.8,
      fontWeight: 300
    },
    header: {
      fontFamily: 'Montserratm, san-serif',
      fontSize: '22px',
      fontWeight: 700,
      margin: 0
    }
  });

export default styles;