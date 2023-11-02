import React from "react";
import './style.css'



const About = () => {
    return(
        <section id="about us">
<h1>About us</h1>

<section class="about">
    <div>
<p class="about1">
We give you a new journey of life with
<br/>
Our expectational checkup
</p>

<p class="about2">
    Our health website is a trusted source of reliable and accurate health information for individuals
     and families. We understand that health is a complex and personal matter, which is why we are dedicated 
     to providing comprehensive information that is tailored to your unique needs. Our team of experienced 
     and qualified healthcare professionals has a passion for educating and empowering people to make informed 
     decisions about their health. Whether you are looking for information about a specific condition,
    treatment options, or preventive measures, we are here to help.
</p>
</div>
<img src={process.env.PUBLIC_URL + '/images/doc9.jpg'} alt="My Image" className="doc9" />
</section>

   <section class="mision-vision">
<div class="mision">
    <h2>Our Mission</h2>
    Our mission is to improve the lives of individuals and communities by providing
    accessible, high-quality healthcare information and resources. We do this by 
    partnering with healthcare professionals, researchers, and trusted organizations 
    to deliver accurate, evidence-based content that empowers individualsto make
    informed decisions about their health and wellness.
    <br/>
</div>   


<div class="vision">
    <h2>Our Vision</h2 >
    We envision a future where everyone has the education and resources they need to
    prioritize their health and well-being. We strive to be a trusted source of 
    healthcare information and a leader in promoting health literacy and empowerment.
    We are dedicated to providing innovative, collaborative, and patient-centered 
    resources that improve health outcomes and promote a healthier world for all.
    <br/>
</div>
</section>
</section>
    );
}

export default About