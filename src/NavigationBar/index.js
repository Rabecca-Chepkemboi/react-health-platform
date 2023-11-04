import React from "react";
import './style.css'


const NavigationBar = () =>{
    return(
        <>
        <nav>
        <ul>
            <li><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="My Image" className="logo" /></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about us">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
        <section id="home">
                <section className="detail2">
                    <div className="detail1">
                        <p className="detail3">
                            Collaborative doctors of all fields, and specialists 
                            <br/>
                            to bring hapiness to you We understand that health is 
                            <br/>
                            a complex and personal matter, which is whywe are 
                            <br/>
                            dedicated to providing comprehensive information that 
                            <br/>
                            is tailored to your unique needs. Our team of experienced 
                            <br/>
                            and qualified healthcare professionals
                        </p>
                        <br />
                        <p className="button">
                            <button className="btn1">Get Started</button>
                        </p>
                    </div>
                    
                    <img src={process.env.PUBLIC_URL + '/images/doc1.jpg'} alt="My Image" className="doc1" />
                </section>

                <div className="content">
                    <p>24 Hours emergency services</p>
                    <p>50+ clinical location</p>
                    <p>30+ ICU rooms</p>
                    <p>3, 000+ Recovered patients</p>
                    <p>200+ Expert doctors</p>
                </div>
            </section></>
    );
}

export default NavigationBar