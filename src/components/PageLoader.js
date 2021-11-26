import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core'

export const PageLoader = () => {
  return (
    <div className="loader">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <CircularProgress color="primary"/>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </div>
  )
}