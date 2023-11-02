import React from "react";
import './style.css'



const NavigationBar = () =>{
    return(
        <><nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#doctors">Doctors</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about us">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>Search</li>
                <li><button class="btn2">Login</button></li>
                <li><button class="btn2">Sign Up</button></li>
            </ul>
        </nav><section id="home">
                <section class="detail2">
                    <div class="detail1">
                        <p class="detail3">
                            collaborative doctors of all fields, and specialists to bring hapiness to you We understand that health is a complex and personal matter, which is why
                            <br />
                            we are dedicated to providing comprehensive information that is tailored to your unique needs. Our team of experienced and qualified healthcare professionals
                        </p>
                        <br />
                        <p class="button">
                            <button class="btn1">Get Started</button>
                        </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/images/doc1.jpg'} alt="My Image" className="doc1" />
                </section>

                <div class="content">
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