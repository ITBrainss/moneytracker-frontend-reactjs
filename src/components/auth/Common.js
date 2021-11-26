import React from 'react'
import {useStyles} from '../../styles/auth/mui'
import {InputAdornment, TextField} from '@material-ui/core'
import i18next from 'i18next'

export const TextFieldCustom = props => {
  const mui = useStyles()

  const {
    name, type, icon, value, onChange
  } = props

  return (
    <TextField
      name={name}
      type={type}
      className={mui.input}
      label={i18next.t(`auth.${name}`)}
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{
        disableUnderline: true,
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>
      }}
      {...props}
    />
  )
}