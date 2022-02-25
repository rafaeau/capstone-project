import React from 'react'
import MyNavbar from '../components/MyNavbar';
import MySidebar from '../components/MySidebar';
import Tapestry from '../components/Tapestry'
import './Favorites.css';

function Favorites() {
  return (
    <>
      <div className='wrap mt-5'>
        <MyNavbar title={'Favorites'}/>
        <div className='d-flex'>
          <MySidebar />
          <Tapestry className='tapestry'/>
        </div>
      </div>
    </>
  )
}

export default Favorites