import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

function MyFooter() {
    return (
        <footer>
            <p className='my-1'>Made in Berlin™</p>
            <a href="https://www.linkedin.com/in/rafaelnevesf/" className='footer-icons'><BsLinkedin/></a>
            <a href="https://github.com/rafaeau" className='footer-icons'><BsGithub/></a>
            <a href="https://www.instagram.com/rafaeau/" className='footer-icons'><BsInstagram/></a>
        </footer>
    )
}

export default MyFooter;
