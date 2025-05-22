import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'

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
