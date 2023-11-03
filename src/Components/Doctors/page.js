import React from "react";
import './style.css'



const Doctors = () => {
    return (
        <section id="doctors">
<h1>Meet Our Experienced Doctors</h1>
<hr></hr>

<section className="docsection1">
<img src={process.env.PUBLIC_URL + '/images/doc2.jpg'} alt="My Image" className="img" />
<div class="image">
    <br/>
    <span className="doc-name">Dr. Esther</span><span className="title">Pediatrician</span>
    <br/>
    <br/>
    6 years experience
    <br/>
    <br/>
    specializes in the healthcare of infants, children, and adolescents, 
    providing medical care, preventive services, and monitoring child development.
    <br/>
    <p className="appoint"><button className="btn-appointment">Make appointment</button></p>
</div>


<img src={process.env.PUBLIC_URL + '/images/doc3.jpg'} alt="My Image" className="img" />
<div className="image">
    <br/>
    <span className="doc-name">Dr. Daisy</span><span className="title">Surgeon</span>
    <br/>
    <br/>
    7 years experience
    <br/>
    <br/>
    Performs surgical procedures to treat diseases, injuries, or deformities. Surgeons may 
    specialize in various areas such as orthopedic surgery, cardiothoracic surgery, neurosurgery.
    <br/>
    <p className="appoint"><button className="btn-appointment">Make appointment</button></p>
</div>


<img src={process.env.PUBLIC_URL + '/images/doc4.jpg'} alt="My Image" className="img" />
<div className="image">
    <br/>
    <span className="doc-name">Dr. Kachun</span><span className="title">Dermatologist</span>
    <br/>
    <br/>
    10 years experience
    <br/>
    <br/>
    Specializes in diagnosing and treating conditions 
    related to the skin, hair, and nails, including 
    diseases, infections, and cosmetic concerns.
    <p className="appoint"><button className="btn-appointment">Make appointment</button></p>
</div>
</section>

<section class="docsection1">
<img src={process.env.PUBLIC_URL + '/images/doc5.jpg'} alt="My Image" className="img" />
<div className="image">
    <br/>
    <span class="doc-name">Dr. Ambrose</span><span className="title">Psychiatrist</span>
    <br/>
    <br/>
    13 years experience
    <br/>
    <br/>
    Specializes in mental health, diagnosing and treating mental illnesses providing 
    therapy, and prescribing medications for psychiatric conditions.
    <br/>
    <p className="appoint"><button className="btn-appointment">Make appointment</button></p>
</div>


<img src={process.env.PUBLIC_URL + '/images/doc8.jpg'} alt="My Image" className="img" />
<div className="image">
    <br/>
    <span className="doc-name">Dr. Samwel</span><span className="title">Physician</span>
    <br/>
    <br/>
    6 years experience
    <br/>
    <br/>
    Specializes in the prevention, diagnosis, and treatment of adult diseases, 
    often focusing on complex medical conditions and managing chronic illnesses.
    <br/>
    <p className="appoint"><button className="btn-appointment">Make appointment</button></p>
</div>


<img src={process.env.PUBLIC_URL + '/images/doc7.jpg'} alt="My Image" className="img" />
<div className="image">
    <br/>
    <span className="doc-name">Dr. Morgan</span><span className="title">Anesthesiologist</span>
    <br/>
    <br/>
    20 years experience
    <br/>
    <br/>
    Administers anesthesia and monitors patients' vital signs during surgical
    procedures, ensuring their safety and comfort.
    <br/>
    <p className="appoint"><button className="btn-appointment">Make appointment</button></p>
</div>
</section>
</section>
    );
}


export default Doctors