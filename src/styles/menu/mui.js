import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  btn: {
    position: 'relative',
    width: '100%',
    minHeight: 40,
    minWidth: 'unset',
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 16,
    borderRadius: 10,
    textTransform: 'capitalize',
    fontWeight: 400,
    '&:hover': {
      background: '#007FFF',
      color: 'white',
      '& .MuiSvgIcon-root': {
        transform: 'rotate(360deg)',
        color: 'white'
      }
    },
    '& .MuiSvgIcon-root': {
      minWidth: 24,
      maxWidth: 24,
      minHeight: 24,
      maxHeight: 24,
      color: 'gray',
      transition: 'all 0.4s ease-in-out'
    },
    '&[data-target-active="true"]': {
      background: '#007FFF',
      color: 'white',
      '& .MuiSvgIcon-root': {
        color: 'white'
      }
    }
  },
  btn_expand: {
    '& .MuiButton-label svg': {
      marginRight: 11
    },
    '& .MuiButton-label span': {
      display: 'contents'
    }
  },
  btn_fold: {
    width: 'auto',
    '& .MuiButton-label svg': {
      marginRight: 0
    },
    '& .MuiButton-label span': {
      display: 'none'
    }
  }
}))