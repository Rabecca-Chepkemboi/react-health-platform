import React from "react";
import './style.css'



const Testimonials = () => {
    return (
        <><h1>Lets learn from what our recent patients says</h1>
        <hr></hr>
        <section className="testimonials">
            <img src={process.env.PUBLIC_URL + '/images/patient1.jpg'} alt="My Image" className="testinomy-img" />
            <div className="patient-testimony">
                <p className="patients-name">Clarah</p>
                <p className="recover">Revored from heart desease</p>
                I'm incredibly grateful for the care I received from Dr. Samwel.
                <br />
                Her expertise and compassionate approach made me feel at ease
                <br />
                throughout my treatment. She took the time to explain everything
                <br />
                clearly and ensured I understood my options. Thanks to her, I am now on the
                <br />
                path to recovery.
            </div>


            <img src={process.env.PUBLIC_URL + '/images/patient2.jpg'} alt="My Image" className="testinomy-img" />
            <div className="patient-testimony">
                <p className="patients-name">Omosh</p>
                <p className="recover">recovered from eye desease</p>
                I cannot thank Dr. Ambrose enough for his exceptional skills
                <br />
                as a surgeon. He performed a complex procedure on my knee and
                <br />
                the results have been life-changing. His professionalism,
                <br />
                attention to detail, and follow-up care have been outstanding.
                <br />
                I highly recommend him to anyone in need of orthopedic treatment.
            </div>
        </section><section class="testimonials">
        <img src={process.env.PUBLIC_URL + '/images/patient3.jpg'} alt="My Image" className="testinomy-img" />
                <div className="patient-testimony">
                    <p className="patients-name">Daisy</p>
                    <p className="recover">Recovered from nose treatment</p>
                    Dr. Daisy is an amazing pediatrician. Her warm and friendly demeanor instantly
                    <br />
                    put my child at ease during every visit.
                    <br />
                    She listens attentively, answers all our questions, and
                    <br />
                    provides the best care possible. I have complete trust in
                    <br />
                    her expertise and would recommend her to any parent seeking
                    <br />
                    top-quality care for their child.
                </div>


                <img src={process.env.PUBLIC_URL + '/images/patient4.jpg'} alt="My Image" className="testinomy-img" />
                <div className="patient-testimony">
                    <p className="patients-name">Vince</p>
                    <p className="recover">recovere from heart desease</p>
                    I have been under the care of Dr. Morgan for my chronic
                    <br />
                    condition for several years now. His vast knowledge, dedication,
                    <br />
                    and personalized approach have made a tremendous difference in
                    <br />
                    my quality of life. He always goes above and beyond to ensure
                    <br />
                    I receive the best possible care and support. I am grateful to
                    <br />
                    have him as my doctor.
                </div>
            </section></>
         );
            }
export default Testimonials;