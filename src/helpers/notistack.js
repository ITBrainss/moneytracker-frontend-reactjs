import React from 'react'
import {useSnackbar} from 'notistack'

const InnerSnackbarUtilsConfigurator = props => {
  props.setUseSnackbarRef(useSnackbar())
  return null
}

let useSnackbarRef
const setUseSnackbarRef = useSnackbarRefProp => {
  useSnackbarRef = useSnackbarRefProp
}

export const SnackbarUtilsConfigurator = () => {
  return <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
}

const toast = (msg, variant = 'default') => {
  useSnackbarRef.enqueueSnackbar(msg, {
    variant,
    anchorOrigin: {vertical: 'bottom', horizontal: 'left'}
  })
}

export const success = msg => toast(msg, 'success')
export const warning = msg => toast(msg, 'warning')
export const info = msg => toast(msg, 'info')
export const error = msg => toast(msg, 'error')