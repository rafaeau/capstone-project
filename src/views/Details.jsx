import React from 'react'
import MyNavbar from '../components/MyNavbar';
import MySidebar from '../components/MySidebar';
import './Details.css';
import { Carousel } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';

function Details() {
    return (
        <>
            <div className='wrap mt-5'>
                <MyNavbar title={'Details'}/>
                <div className='d-flex'>
                    <MySidebar />
                    <div className='container details-wrap'>

                        <div className='row d-flex'>

                            <div className='col-2 first-col'>
                                <img src="https://place-hold.it/150" className="tapestry-pic mt-3 mb-2" alt="actor-pic" />
                                <h4>Actor's name</h4>
                                <p className='par mt-3'>
                                    <b>Age:</b> 26 (21.06.1993)<br />
                                    <b>Height:</b> 174cm<br />
                                    <b>Hair colour:</b>  Dark brown<br />
                                    <br/>
                                    <b>Eye colour:</b> Dark brown<br />
                                    <b>Nationality:</b> Dutch<br />
                                    <b>Languages:</b> Dutch (native),
                                    English (fluent),
                                    German (proficient)
                                </p>
                            </div>

                            <div className='col-9 second-col'>
                                <h3 className='star-fav'><AiOutlineStar /></h3>
                                <h4 className='mt-3'>Credits</h4>
                                <p className='par'>
                                    <b>Film:</b><br />
                                    Alfgerour Baldursdottir (Director). (2019). A Snow Globe's Secret. dBs Berlin.<br />
                                    Clint Frift (Director). (2019). WLDYDI?. dBs Berlin.<br />
                                    Emma Giuliani (Director). (2019). Sharktooth and Thumbnail. dBs Berlin.<br />
                                    Helena Marinho (Director). (2020). Knock Knock. dBs Berlin.<br />
                                    Jen Frisch-Wang (Director). (2020). Memoriam. dBs Berlin.<br />
                                    Li Wallis (Director). (2019). Parklife. dBs Berlin.<br />
                                    Petter Soderberg (Director). (2019). Henny's Ladder. dBs Berlin.<br />
                                    Samantha Decker (Director). (2019). Natural As Fuck. dBs Berlin.<br />
                                    Sara Russo (Director). (2019). Passing Me By. dBs Berlin.<br />
                                    Zoe Valentini (Director). (2019). Ticket For Three. dBs Berlin.<br />
                                    <br />
                                    <b>Theatre:</b><br />
                                    Instant Theatre Berlin<br />
                                    Skungpoomery (Catalyst, 2020, director: Adam Donald)<br />
                                    <br />
                                    <b>Skills:</b><br />
                                    Tae-Kwon-Do<br />
                                    Football<br />
                                    Parkour<br />
                                </p>
                                <button className="btn-msg ml-auto d-block">Message</button>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col-11 third-col'>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://place-hold.it/800x450"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://place-hold.it/800x450"
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://place-hold.it/800x450"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Details