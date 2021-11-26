import React from 'react'
import {Button, Grid} from '@material-ui/core'
import LogoSvg from '../assets/logo'
import TeamWorkSvg from '../assets/team-work'
import i18next from 'i18next'
import {useStyles} from '../styles/auth/mui'
import sass from '../styles/auth/auth.module.sass'
import FormLogin from '../components/auth/FormLogin'
import FormRegister from '../components/auth/FormRegister'
import FormReset from '../components/auth/FormReset'

export const AuthPage = () => {
  const mui = useStyles()

  const [form, setForm] = React.useState('login') // default - login | reset | register

  const returnFormGrid = () => {
    switch (form) {
      case 'login':
        return <FormLogin/>
      case 'register':
        return <FormRegister/>
      case 'reset':
        return <FormReset/>
      default:
        return <Grid xs={6} item/>
    }
  }

  return (
    <div className={sass.root}>
      <Grid container justifyContent="center">
        <Grid className={sass.container} container item xs={8}>
          <Grid className={`${sass.container__left} ${sass.leftContainer}`} xs={6} item>
            <div className={sass.leftContainer__header}>
              {LogoSvg}

              {form === 'login' && (
                <Button className={mui.btnReg} onClick={() => setForm('register')}>
                  {i18next.t('auth.createAccount')}
                </Button>
              )}

              {form === 'register' && (
                <div className={sass.leftContainer__alreadyHave}>
                  {i18next.t('auth.alreadyHaveAcc')}
                  <span onClick={() => setForm('login')}>
                      {i18next.t('auth.login')}
                    </span>
                </div>
              )}

            </div>
            <div className={sass.leftContainer__body}>
              {TeamWorkSvg}
              <div className={sass.leftContainer__promotion}>
                {i18next.t('auth.promotion')}
              </div>
            </div>
          </Grid>
          {returnFormGrid()}
        </Grid>
      </Grid>
    </div>
  )
}
