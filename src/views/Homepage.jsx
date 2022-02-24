import React from 'react'
import MyNavbar from '../components/MyNavbar';
import MySidebar from '../components/MySidebar';
import MyFooter from '../components/MyFooter';
import Tapestry from '../components/Tapestry'
import './Homepage.css';

function Homepage() {
  return (
    <>
      <div className='wrap mt-5'>
        <MyNavbar />
        <div className='d-flex'>
          <MySidebar/>
          <Tapestry className='tapestry'/>
        </div>
        {/* <MyFooter/> */}
      </div>
    </>
  )
}

export default Homepage