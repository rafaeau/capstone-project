import React from 'react'
import MyNavbar from '../components/MyNavbar';
import MySidebar from '../components/MySidebar';
import './ContactUs.css';

function ContactUs() {
    return (
        <>
            <div className='wrap mt-5'>
                <MyNavbar title={'Contact us'} />
                <div className='d-flex'>
                    <MySidebar />
                    <div className='container contact-wrap'>

                        <div className='row d-flex'>

                            <div className='col-11 contact-col'>
                                <>
                                    <h4 className='mt-3 text-center'>Contact us</h4>
                                    <p style={{color: 'grey'}}>Send us a message and we will <br />
                                        respond as soon as possible.</p>
                                    <form>
                                        <input type="text" placeholder="Name" className="contact-form mt-1" /> <br />
                                        <input type="text" placeholder="Email" className="contact-form my-3" /> <br />
                                        <textarea className="form-control contact-text-area" placeholder="Message" rows="4"/>
                                        <br />
                                        <button className="btn-form">Send message</button>
                                    </form>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs