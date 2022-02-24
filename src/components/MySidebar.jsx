import React from 'react';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { IoIosPaper, IoMdSettings } from 'react-icons/io'
import { BsFillEnvelopeFill } from 'react-icons/bs'

function MySidebar() {
    return (
        <>
            <div className='sidebar pl-3'>
                <h4 className='mb-4 icons-side'><AiFillHome /></h4>
                <hr className='hr' />
                <h3 className='mb-4 icons-side'><AiFillStar /></h3>
                <hr className='hr' />
                <h4 className='mb-4 icons-side'><IoIosPaper /></h4>
                <hr className='hr' />
                <h5 className='mb-4 icons-side'><BsFillEnvelopeFill /></h5>
                <hr className='hr' />
                <h4 className='mb-4 icons-side'><IoMdSettings /></h4>
            </div>
        </>
    )
}

export default MySidebar;
