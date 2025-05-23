import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const NotFound = () => {
  return (
    <div className='min-h-[100vh]'>
      <Header />
      <div>
        <h1 className='text-[100px] text-center'>Not Found!</h1>
      </div>
    </div>
  )
}

export default NotFound
