import React from 'react'
import Sidebar from '../components/Sidebar'
import sass from '../styles/dashboard/dashboard.module.sass'

export const Dashboard = () => {

  return (
    <div className={sass.layout}>
      <Sidebar/>
      <div className={sass.dashboard}>
        CONTENT
      </div>
    </div>
  )
}