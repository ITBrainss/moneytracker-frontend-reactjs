import React from 'react'
import sass from '../../styles/auth/auth.module.sass'
import i18next from 'i18next'
import {Box, Button, Checkbox, CircularProgress, FormControlLabel, Grid, Grow, IconButton} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/MailOutline'
import {Visibility, VisibilityOff} from '@material-ui/icons'
import GoogleIconSvg from '../../assets/GoogleIconSvg'
import FbIconSvg from '../../assets/FbIconSvg'
import {useStyles} from '../../styles/auth/mui'
import {TextFieldCustom} from './Common'
import {useDispatch} from 'react-redux'
import {required, validEmail} from '../../helpers/validation'
import * as yup from 'yup'
import {error} from '../../helpers/notistack'
import {login} from '../../store/auth/action'

const schema = yup.object().shape({
  email: validEmail(), password: required('auth.password')
})

const FormLogin = () => {
  const mui = useStyles()

  const dispatch = useDispatch()

  const [data, setData] = React.useState({
    email: '', password: '', remember: false, showPassword: false, loading: false
  })

  const [errors, setErrors] = React.useState([])

  const handleInput = (name, value) => {
    setData(state => ({
      ...state, [name]: value
    }))
  }

  const handleOnChange = e => {
    const name = e.target.name
    const value = e.target.value

    handleInput(name, value)
  }

  const handleSubmit = () => {
    toggleLoading(true)

    const sendData = {
      email: data.email, password: data.password
    }

    schema
      .validate(sendData, {abortEarly: false})
      .then(function () {
        dispatch(login(sendData))
          .then(r => {
            console.log(r)
            toggleLoading(false)
          })
      })
      .catch(err => {
        setErrors([])

        err.inner.forEach(el => {
          setErrors(state => [...state, el.params.path])
          error(`${el.params.label} ${el.message}`)
        })

        toggleLoading(false)
      })
  }

  const toggleRemember = e => handleInput('remember', e.target.checked)
  const toggleShowPassword = () => handleInput('showPassword', !data.showPassword)
  const toggleLoading = state => handleInput('loading', state)

  const removeFieldError = e => {
    const name = e.target.name

    if (errors.includes(name))
      setErrors(errors.filter(el => el !== name))
  }

  return (<Grow in={true}>
    <Grid className={`${sass.container__form} ${sass.form}`} item>
      <div className={sass.form__header}>{i18next.t(`auth.loginText`)}</div>
      <div className={sass.form__body}>
        <Box component="form">
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextFieldCustom
                name="email"
                type="text"
                value={data.email}
                onChange={handleOnChange}
                onClick={removeFieldError}
                error={errors.includes('email')}
                icon={<EmailIcon/>}
              />
            </Grid>
            <Grid item>
              <TextFieldCustom
                name="password"
                type={data.showPassword ? 'text' : 'password'}
                value={data.password}
                onChange={handleOnChange}
                onClick={removeFieldError}
                error={errors.includes('password')}
                icon={<IconButton
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {data.showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>}
              />
            </Grid>
            <Grid container item justifyContent="space-between" alignItems="baseline">
              <Grid item>
                <FormControlLabel
                  className={mui.rememberForm}
                  control={<Checkbox value={data.remember} checked={data.remember} onChange={toggleRemember}/>}
                  label={i18next.t('auth.remember')}
                />
              </Grid>
              <Grid item>
                  <span className={sass.form__forgot}>
                    {i18next.t('auth.forgot')}
                  </span>
              </Grid>
            </Grid>
            <Grid item>
              <Button className={`${mui.btnAction} ${mui.btnAuth}`} onClick={handleSubmit} disabled={data.loading}>
                {data.loading ? <CircularProgress size={24}/> : i18next.t('auth.login')}
              </Button>
            </Grid>
            <Grid item>
              <div className={sass.form__instant}>
                {i18next.t('auth.instantLogin')}
              </div>
            </Grid>
            <Grid item>
              <Button className={`${mui.btnAction} ${mui.btnGoogle}`}>
                {GoogleIconSvg} <span>{i18next.t('auth.withGoogle')}</span>
              </Button>
            </Grid>
            <Grid item>
              <Button className={`${mui.btnAction} ${mui.btnFb}`}>
                {FbIconSvg} <span>{i18next.t('auth.withFb')}</span>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Grid>
  </Grow>)
}

export default FormLogin