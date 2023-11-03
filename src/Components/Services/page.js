import React from "react";
import './style.css'



const Services = () => {
    return (
        <section id="services">
<h1>Our services</h1>
<hr></hr>

<p className="service2">
<br/>
At our health website, we are committed to providing a wide range of healthcare services to help you achieve optimal
<br/>
health and wellness. Our services are tailored to meet your individual needs, and our team of highly trained professionals
<br/>
is dedicated to ensuring that you receive the best possible care.
<br/>
</p>

<section className="services">
<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/scan.png'} alt="My Image" className="icon1" />
<p className="service3">Scan diseases</p>
<br/>
Medical scans, such as X-rays, CT scans, and MRI 
<br/>
scans, utilize imaging technology to capture detailed 
<br/>
internal images of the body, aiding in the diagnosis 
<br/>
and assessment of various diseases and conditions.
<br/>
<p className="button2">
<button className="btn3">Learn More</button>
</p>
</div>

<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/icu.jpg'} alt="My Image" className="icon2" />
<p className="service3">ICU facilities</p>
provide advanced monitoring, life-supporting equipment that enables to any given moment
<br/>
round-the-clock care to critically ill patients, often 
<br/>
those who require close observation and intervention 
<br/>
for severe conditions or after major surgeries.
<br/>
<p className="button2">
    <button className="btn3">Learn More</button>
    </p>
</div>

<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/eye.png'} alt="My Image" className="icon3" />
<p className="service3">Eye treatment</p>
<br/>
<br/>
managing, and treating various eye conditions and 
<br/>
diseases, with the goal of preserving or improving
<br/>
vision and maintaining overall eye health.
<br/>
<p className="button2">
    <button className="btn3">Learn More</button>
    </p>
</div>

<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/nose.png'} alt="My Image" className="icon4" />
<p className="service3">Nose treatment</p>
<br/>
managing conditions affecting the nasal passages and
<br/>
sinuses, including nasal congestion,sinusitis, deviated
<br/>
septum, and nasal polyps, to improve nasal function 
<br/>
and relieve associated symptoms.
<br/>
<p className="button2">
    <button className="btn3">Learn More</button>
    </p>
</div>
</section>

<section className="services">
<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/heart.webp'} alt="My Image" className="icon5" />
<p className="service3">Heart treatment</p>
diagnosing and managing various cardiovascular conditions, such as coronary artery disease, heart failure,arrhythmias, and structural heart abnormalities, with the goal of improving heart function, reducing symptoms, and preventing further complications.
<br/>
<p className="button2">
    <button class="btn3">Learn More</button>
    </p>
</div>

<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/medicine.png'} alt="My Image" className="icon6" />
<p className="service3">Proper medication</p>
prescribed medications, following the recommended 
<br/>
dosage, timing, and instructions provided by 
<br/>
healthcare professionals, to ensure optimal 
effectiveness and minimize potential risks or 
side effects.
<br/>
<p className="button2">
    <button className="btn3">Learn More</button>
    </p>
</div>

<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/first aid.png'} alt="My Image" className="icon7" />
<p className="service3">Fist aid services</p>
care provided by trained individuals in response to an injury, illness, or emergency situation, aiming to 
<br/>
stabilize the condition, prevent further harm, and promote the well-being of the affected individual 
<br/>
until professional medical help arrives.
<br/>
<p className="button2">
    <button class="btn3">Learn More</button>
    </p>
</div>

<div className="available-services">
<img src={process.env.PUBLIC_URL + '/images/diagnostic.png'} alt="My Image" className="icon8" />
<p className="service3">diagnostic services</p>
medical examinations, tests, and procedures performed by healthcare professionals 
to identify and determine the presence, nature, and extent of a disease, condition, 
or injury, aiding in accurate diagnosis and treatment planning.
<br/>
<p className="button2">
    <button className="btn3">Learn More</button>
    </p>
</div>
</section>
</section>
    );
}

export default Services