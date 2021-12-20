import React from 'react'
import {Button, Grid} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import People from '@material-ui/icons/People'
import AddIcCall from '@material-ui/icons/AddIcCall'
import Arrow from '@material-ui/icons/ArrowBack'
import Category from '@material-ui/icons/Category'
import Notifications from '@material-ui/icons/Notifications'
import Chat from '@material-ui/icons/Chat'
import LogoSvg from '../assets/logo'
import {useStyles} from '../styles/menu/mui'
import sass from '../styles/menu/sidebar.module.sass'

const NAV_ITEMS = [
  {id: 1, icon: <HomeIcon/>, text: 'Dashboard', url: '/'},
  {id: 2, icon: <People/>, text: 'Email', url: '/people'},
  {id: 3, icon: <AddIcCall/>, text: 'Contacts', url: '/call'},
  {id: 4, icon: <Category/>, text: 'Crypto', url: '/crypto'},
  {id: 5, icon: <Chat/>, text: 'Banking', url: '/banking'},
  {id: 6, icon: <HomeIcon/>, text: 'Ticketing', url: '/ticketing'},
  {id: 7, icon: <Chat/>, text: 'Calendar', url: '/calendar'},
  {id: 8, icon: <HomeIcon/>, text: 'Chat', url: '/chat'},
  {id: 9, icon: <Notifications/>, text: 'Notifications', url: '/notifications'}
]


const Sidebar = () => {
  const mui = useStyles()

  const [sidebarClass, setSidebarClass] = React.useState('expand')
  const [active, setActive] = React.useState('/')

  const toggle = () => setSidebarClass(state => state === 'expand' ? 'fold' : 'expand')

  const getModifier = el => `${el}_${sidebarClass}`
  const isActive = URL => URL === active && 'active'

  const handleClick = URL => {
    setActive(URL)
    console.log(`IMPLEMENT REDIRECTING TO - ${URL}`)
  }

  return (
    <Grid className={`${sass.sidebar} ${sass[getModifier('sidebar')]}`} container>
      <Grid className={sass.sidebar__container} container item direction="column" justifyContent="center">
        <Grid className={sass.sidebar__logo} item>
          {LogoSvg}
        </Grid>
        {NAV_ITEMS.map(item => (
          <Grid key={item.id} className={sass.sidebar__item}>
            <Button
              className={`${mui.btn} ${mui[getModifier('btn')]} ${mui[isActive(item.url)]}`}
              onClick={() => handleClick(item.url)}
              data-target-active={item.url === active && true}
            >
              {item.icon}
              <span>{item.text}</span>
            </Button>
          </Grid>
        ))}
      </Grid>
      <div className={sass.sidebar__arrow} onClick={toggle}>
        <Arrow/>
      </div>
    </Grid>
  )
}

export default Sidebar