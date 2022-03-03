import React from 'react'
import MyNavbar from '../components/MyNavbar';
import MySidebar from '../components/MySidebar';
import './AboutUs.css';
import { Carousel } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';

function AboutUs() {
    return (
        <>
            <div className='wrap mt-5'>
                <MyNavbar title={'AboutUs'} />
                <div className='d-flex'>
                    <MySidebar />
                    <div className='container about-wrap'>

                        <div className='row d-flex'>

                            <div className='col-11 about-col text-justify'>
                                <h4 className='mt-2 text-center'>About us</h4>
                                <h6 className='text-left mx-3'>Who we are</h6>
                                <p className='mx-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <h6 className='text-left mx-3'>Why we’re different than the rest</h6>
                                <p className='mx-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs