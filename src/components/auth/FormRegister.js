import React from 'react'
import i18next from 'i18next'
import {Box, Button, CircularProgress, Grid, Grow} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/MailOutline'
import {useStyles} from '../../styles/auth/mui'
import {TextFieldCustom} from './Common'
import sass from '../../styles/auth/auth.module.sass'
import * as yup from 'yup'
import {mustMatch, required, validEmail} from '../../helpers/validation'
import {error} from '../../helpers/notistack'

const schema = yup.object().shape({
  firstName: required('auth.firstName'),
  lastName: required('auth.lastName'),
  email: validEmail('auth.email'),
  password: required('auth.password'),
  passwordConfirm: mustMatch('auth.lastName', 'password')
})

const FormRegister = () => {
  const mui = useStyles()

  const [data, setData] = React.useState({
    firstName: '', lastName: '', email: '', password: '', passwordConfirm: '', loading: false
  })

  const [errors, setErrors] = React.useState([])

  const handleSubmit = () => {
    toggleLoading(true)

    const sendData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm
    }

    schema
      .validate(sendData, {abortEarly: false})
      .then(function () {
        error('API IS NOT IMPLEMENTED')
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

  const handleInput = (name, value) => {
    setData(state => ({
      ...state, [name]: value
    }))
  }

  const toggleLoading = state => handleInput('loading', state)

  const handleOnChange = e => {
    const name = e.target.name
    const value = e.target.value

    handleInput(name, value)
  }

  const removeFieldError = e => {
    const name = e.target.name

    if (errors.includes(name))
      setErrors(errors.filter(el => el !== name))
  }

  return (<Grow in={true}>
    <Grid className={`${sass.container__form} ${sass.form}`} item>
      <div className={sass.form__header}>{i18next.t(`auth.registerText`)}</div>
      <div className={sass.form__body}>
        <Box component="form">
          <Grid container direction="column" spacing={3}>
            <Grid container item spacing={3}>
              <Grid container item direction="row" spacing={3}>
                <Grid item xs={6}>
                  <TextFieldCustom
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleOnChange}
                    onClick={removeFieldError}
                    error={errors.includes('firstName')}
                    icon={<PersonIcon/>}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldCustom
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleOnChange}
                    onClick={removeFieldError}
                    error={errors.includes('lastName')}
                    icon={<PersonIcon/>}
                  />
                </Grid>
              </Grid>
              <Grid container item direction="column" spacing={3}>
                <Grid item>
                  <TextFieldCustom
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    onClick={removeFieldError}
                    error={errors.includes('email')}
                    icon={<EmailIcon/>}
                  />
                </Grid>
                <Grid item>
                  <TextFieldCustom
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleOnChange}
                    onClick={removeFieldError}
                    error={errors.includes('password')}
                  />
                </Grid>
                <Grid item>
                  <TextFieldCustom
                    type="password"
                    name="passwordConfirm"
                    value={data.passwordConfirm}
                    onChange={handleOnChange}
                    onClick={removeFieldError}
                    error={errors.includes('passwordConfirm')}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button className={`${mui.btnAction} ${mui.btnAuth}`} onClick={handleSubmit} disabled={data.loading}>
                {data.loading ? <CircularProgress size={24}/> : i18next.t('auth.register')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Grid>
  </Grow>)
}

export default FormRegister