import React from 'react'
import i18next from 'i18next'
import {Box, Button, Grid, Grow} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/MailOutline'
import {useStyles} from '../../styles/auth/mui'
import {TextFieldCustom} from './Common'
import sass from '../../styles/auth/auth.module.sass'

const FormRegister = () => {
  const mui = useStyles()

  const [data, setData] = React.useState({
    firstName: '', lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
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

  return (
    <Grow in={true}>
      <Grid className={sass.container__right} xs={6} item>
        <div className={sass.rightContainer__header}>{i18next.t(`auth.registerText`)}</div>
        <div className={sass.rightContainer__body}>
          <Box component="form">
            <Grid container direction="column" spacing={3}>
              <Grid container item>
                <Grid container item direction="row" justifyContent="space-between">
                  <Grid item>
                    <TextFieldCustom
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleOnChange}
                      icon={<PersonIcon/>}
                    />
                  </Grid>
                  <Grid item>
                    <TextFieldCustom
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleOnChange}
                      icon={<PersonIcon/>}
                    />
                  </Grid>
                </Grid>
                <TextFieldCustom
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  icon={<EmailIcon/>}
                />
                <TextFieldCustom
                  type="password"
                  name="password"
                  value={data.firstName}
                  onChange={handleOnChange}
                />
                <TextFieldCustom
                  type="password"
                  name="passwordConfirm"
                  value={data.passwordConfirm}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item>
                <Button className={`${mui.btnAction} ${mui.btnAuth}`}>
                  {i18next.t('auth.register')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Grid>
    </Grow>
  )
}

export default FormRegister