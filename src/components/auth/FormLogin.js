import React from 'react'
import sass from '../../styles/auth/auth.module.sass'
import i18next from 'i18next'
import {Box, Button, Checkbox, FormControlLabel, Grid, Grow, IconButton} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/MailOutline'
import {Visibility, VisibilityOff} from '@material-ui/icons'
import GoogleIconSvg from '../../assets/GoogleIconSvg'
import FbIconSvg from '../../assets/FbIconSvg'
import {useStyles} from '../../styles/auth/mui'
import {TextFieldCustom} from './Common'
import {useDispatch} from 'react-redux'
import {login} from '../../store/auth/action'

const FormLogin = () => {
  const mui = useStyles()

  const dispatch = useDispatch()

  const [data, setData] = React.useState({
    email: '', password: '',
    remember: false,
    showPassword: false,
    loading: false
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

  const handleSubmit = () => {
    toggleLoading(true)

    let sendData = {
      login: data.email,
      password: data.password
    }

    dispatch(login(sendData))
      .then(r => {
        console.log(r)
        toggleLoading(false)
      })
  }

  const toggleRemember = e => handleInput('remember', e.target.checked)
  const toggleShowPassword = () => handleInput('showPassword', !data.showPassword)
  const toggleLoading = state => handleInput('loading', state)

  return (
    <Grow in={true}>
      <Grid className={sass.container__right} xs={6} item>
        <div className={sass.rightContainer__header}>{i18next.t(`auth.loginText`)}</div>
        <div className={sass.rightContainer__body}>
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
                  type={data.showPassword ? 'text' : 'password'}
                  value={data.password}
                  onChange={handleOnChange}
                  icon={
                    <IconButton
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {data.showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  }
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
                  <span className={sass.rightContainer__forgot}>
                    {i18next.t('auth.forgot')}
                  </span>
                </Grid>
              </Grid>
              <Grid item>
                <Button className={`${mui.btnAction} ${mui.btnAuth}`} onClick={handleSubmit}>
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
      </Grid>
    </Grow>
  )
}

export default FormLogin