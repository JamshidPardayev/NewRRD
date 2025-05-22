import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Hero from '../../components/hero/Hero'

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
