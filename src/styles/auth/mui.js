import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  btnReg: {
    width: 160,
    height: 50,
    color: '#007FFF',
    background: 'white',
    textTransform: 'capitalize',
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 600,
    transition: 'all .3s cubic-bezier(.4,0,.2,1)',
  },
  btnAction: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    background: '#007FFF',
    textTransform: 'none',
    textAlign: 'center',
    color: 'white',
    transition: 'all .3s cubic-bezier(.4,0,.2,1)',
    '& .MuiCircularProgress-root': {
      color: 'white',
    },
    '& svg': {
      marginRight: '2%'
    },
  },
  btnAuth: {
    background: '#007FFF',
    '&:hover': {
      background: '#0253a9'
    }
  },
  btnGoogle: {
    background: '#FC5A5A',
    '&:hover': {
      background: '#941717'
    }
  },
  btnFb: {
    background: '#0062FF',
    '&:hover': {
      background: '#003bab'
    }
  },
  input: {
    height: 60,
    transition: 'all 0.5 ease',
    '& .MuiInputBase-root': {
      color: '#44444F',
      fontWeight: 400,
      fontSize: 18,
      letterSpacing: 0.1,
    },
    textTransform: 'capitalize',
    '& label': {
      fontWeight: 400,
      fontSize: 14,
      color: '#D5D5DC'
    }
  },
  rememberForm: {
    color: '#696974',
    margin: 0,
    textTransform: 'capitalize',
    textAlign: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: 18,
      color: '#FFC542'
    },
    '& .MuiFormControlLabel-label': {
      fontSize: 14,
      fontWeight: 400
    }
  },
  smIcon: {
    width: 18,
    height: 18,
    marginRight: 8
  }
}))