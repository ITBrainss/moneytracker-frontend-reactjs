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

  const returnAuthForm = () => {
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
      <Grid className={sass.container} container>
        <Grid className={`${sass.container__intro} ${sass.intro}`} item>
          <div className={sass.intro__header}>
            {LogoSvg}

            {form === 'login' && (<Button className={mui.btnReg} onClick={() => setForm('register')}>
              {i18next.t('auth.createAccount')}
            </Button>)}

            {form === 'register' && (<div className={sass.intro__alreadyHave}>
              {i18next.t('auth.alreadyHaveAcc')}

              <span onClick={() => setForm('login')}>
                {i18next.t('auth.login')}
              </span>
            </div>)}

          </div>
          <div className={sass.intro__body}>
            <div className={sass.intro__teamWork}>{TeamWorkSvg}</div>
            <div className={sass.intro__promotion}>
              {i18next.t('auth.promotion')}
            </div>
          </div>
        </Grid>
        {returnAuthForm()}
      </Grid>
    </div>
  )
}
