import React from 'react'
import {Box, Button, Checkbox, FormControlLabel, Grid, InputAdornment, TextField} from '@material-ui/core'

import LogoSvg from '../assets/logo'
import TeamWorkSvg from '../assets/team-work'
import GoogleIconSvg from '../assets/GoogleIconSvg'
import FbIconSvg from '../assets/FbIconSvg'
import EmailIcon from '@material-ui/icons/MailOutline'
import LockIcon from '@material-ui/icons/Lock'

import i18next from 'i18next'

import {useStyles} from '../styles/auth/mui'
import sass from '../styles/auth/auth.module.sass'

const TextFieldCustom = props => {
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
    />
  )
}

export const AuthPage = () => {
  const mui = useStyles()

  const [data, setData] = React.useState({
    email: '', password: '',
    remember: false
  })

  const handleInput = (name, value) => {
    setData(state => ({
      ...state,
      [name]: value
    }))
  }

  const handleOnChange = e => {
    const name = e.target.name
    const value = e.target.value

    handleInput(name, value)
  }

  const toggleRemember = e => handleInput('remember', e.target.checked)

  return (
    <div className={sass.root}>
      <Grid container justifyContent="center">
        <Grid className={sass.container} container item xs={8}>
          <Grid className={`${sass.container__left} ${sass.leftContainer}`} xs={6} item>
            <div className={sass.leftContainer__header}>
              {LogoSvg}
              <Button className={mui.btnReg}>
                {i18next.t('auth.createAccount')}
              </Button>
            </div>
            <div className={sass.leftContainer__body}>
              {TeamWorkSvg}
              <div className={sass.leftContainer__promotion}>
                {i18next.t('auth.promotion')}
              </div>
            </div>
          </Grid>
          <Grid className={sass.container__right} xs={6} item>
            <div className={sass.rightContainer__header}>{i18next.t('auth.loginText')}</div>
            <div className={sass.rightContainer__body}>
              <div className={sass.rightContainer__form}>
                <Box component="form">
                  <Grid container direction="column" spacing={3}>
                    <Grid item>
                      <TextFieldCustom
                        name="email"
                        type="text"
                        value={data.email}
                        onChange={handleOnChange}
                        icon={<EmailIcon/>}
                      />
                      <TextFieldCustom
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={handleOnChange}
                        icon={<LockIcon/>}
                      />
                    </Grid>
                    <Grid container item justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <FormControlLabel
                          className={mui.rememberForm}
                          control={
                            <Checkbox value={data.remember} checked={data.remember} onChange={toggleRemember}/>
                          }
                          label={i18next.t('auth.remember')}
                        />
                      </Grid>
                      <Grid item>
                        <a href="#" className={sass.rightContainer__forgot}>
                          {i18next.t('auth.forgot')}
                        </a>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button className={`${mui.btnAction} ${mui.btnLogin}`}>
                        {i18next.t('auth.login')}
                      </Button>
                    </Grid>
                    <Grid item>
                      <div className={sass.rightContainer__instant}>
                        {i18next.t('auth.instantLogin')}
                      </div>
                    </Grid>
                    <Grid item>
                      <Button className={`${mui.btnAction} ${mui.btnGoogle}`}>
                        {GoogleIconSvg} {i18next.t('auth.withGoogle')}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button className={`${mui.btnAction} ${mui.btnFb}`}>
                        {FbIconSvg} {i18next.t('auth.withFb')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}