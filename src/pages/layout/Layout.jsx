import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Hero from '../../components/hero/Hero'

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Outlet />
    </div>
  )
}

export default Layout
