import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import {Router} from 'react-router'
import './styles/index.sass'

import {Provider as ReduxProvider} from 'react-redux'
import store from './store/index.js'

import './helpers/i18n'
import history from './helpers/history'
import {createTheme, ThemeProvider} from '@material-ui/core'
import {SnackbarProvider} from 'notistack'
import {SnackbarUtilsConfigurator} from './helpers/notistack'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1108,
      xl: 1920
    }
  },
  typography: {
    fontFamily: {
      regular: ['"Roboto Light"', 'sans-serif'].join(','),
    }
  },
})

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={5}>
          <SnackbarUtilsConfigurator/>
          <App/>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
