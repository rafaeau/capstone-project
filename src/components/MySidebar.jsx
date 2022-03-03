import React from 'react';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { IoIosPaper, IoMdSettings } from 'react-icons/io'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

function MySidebar() {
    return (
        <>
            <div className='sidebar pl-3'>
                <Link to="/homepage">
                    <h4 className='mb-4 icons-side'><AiFillHome /></h4>
                </Link>
                <hr className='hr' />
                <Link to="/favorites">
                    <h3 className='mb-4 icons-side'><AiFillStar /></h3>
                </Link>
                <hr className='hr' />
                <Link to="/about-us">
                    <h4 className='mb-4 icons-side'><IoIosPaper /></h4>
                </Link>
                <hr className='hr' />
                <Link to="/contact-us">
                    <h5 className='mb-4 icons-side'><BsFillEnvelopeFill /></h5>
                </Link>
                <hr className='hr' />
                <Link to="/login">
                    <h4 className='mb-4 icons-side'><IoMdSettings /></h4>
                </Link>
            </div>
        </>
    )
}

export default MySidebar;
