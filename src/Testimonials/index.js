import React from "react";
import './style.css'



const Testimonials = () => {
    return (
        <><h1>Lets learn from what our recent patients says</h1>
        <hr></hr>
        {/* <div className="background-image"></div> */}
        <section className="testimonials">
            <img src={process.env.PUBLIC_URL + '/images/patient1.jpg'} alt="My Image" className="testinomy-img" />
            <div className="patient-testimony">
                <p className="recover"> <span>Clarah</span> <br/><br/>Revored from heart desease</p>
                I'm incredibly grateful for the care I received 
                <br/>
                from Dr. Samwel. Her expertise and compassionate 
                <br/>
                approach made me feel at ease throughout my 
                <br/>
                treatment. She took the time to explain 
                <br/>
                everything clearly and ensured I understood my 
                <br/>
                options. Thanks to her, I am now on the path 
                <br/>
                to recovery.
            </div>


            <img src={process.env.PUBLIC_URL + '/images/patient2.jpg'} alt="My Image" className="testinomy-img" />
            <div className="patient-testimony">
                <p className="recover"> <span>Omosh</span> <br/><br/>Recovered from eye desease</p>
                I cannot thank Dr. Ambrose enough for his
                <br />
                exceptional skills as a surgeon. He performed 
                <br />
                a complex procedure on my knee and the results 
                <br />
                have been life-changing. His professionalism, 
                <br />
                attention to detail, and follow-up care have 
                <br />
                been outstanding. I highly recommend him to    
                <br />            
                anyone in need of orthopedic treatment.
            </div>
        </section>
        <section class="testimonials">
        <img src={process.env.PUBLIC_URL + '/images/patient3.jpg'} alt="My Image" className="testinomy-img" />
                <div className="patient-testimony">
                    <p className="recover"> <span>Daisy</span> <br/><br/>Recovered from nose treatment</p>
                    Dr. Daisy is an amazing pediatrician. 
                    <br/>
                    Her warm and friendly demeanor instantly 
                    <br/>
                    put my child at ease during every visit. 
                    <br/>
                    She provides the best care possible. 
                    <br/>
                    I have complete trust in her expertise 
                    <br/>
                    and would recommend her to any parent 
                    <br/>
                    seeking top-quality care for their child.
                </div>


                <img src={process.env.PUBLIC_URL + '/images/patient4.jpg'} alt="My Image" className="testinomy-img" />
                <div className="patient-testimony">
                    <p className="recover"> <span>Vince</span> <br/><br/>Recovere from heart desease</p>
                    I have been under the care of Dr. Morgan 
                    <br/>
                    for my chronic condition for several years 
                    <br/>
                    now. His vast knowledge, dedication, and 
                    <br/>
                    personalized approach have made a tremendous 
                    <br/>
                    difference in my quality of life. He always 
                    <br/>
                    goes above and beyond to ensure I receive 
                    <br/>
                    the best possible care and support. I am 
                    <br/>
                    grateful to have him as my doctor.
                </div>
            </section></>
         );
            }
export default Testimonials;