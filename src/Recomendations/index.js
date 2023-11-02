import React from "react";
import './style.css'



const Recomendations = () =>{
    return (
        <><h1>Our Recomendations For Good Health</h1><section class="recommended">
            <div>
                <br />
                <img src={process.env.PUBLIC_URL + '/images/diet.jpg'} alt="My Image" className="img-recomend6" />
                <p class="diet">Balanced diet</p>
                Eat a variety of nutritious foods, including fruits, vegetables,
                whole grains, lean proteins, and healthy fats. Limit processed foods,
                sugary snacks, and excessive sodium and saturated fats.
            </div>

            <div>
                <br />
                <img src={process.env.PUBLIC_URL + '/images/excercise.jpg'} alt="My Image" className="img-recomend5" />
                <p class="diet">Regular exercise</p>
                Engage in physical activity regularly to improve cardiovascular
                health, maintain a healthy weight, and boost overall fitness. Aim for at least 150
                minutes of moderate-intensity exercise or 75 minutes of vigorous exercise per week.
            </div>

            <div>
                <br />
                <img src={process.env.PUBLIC_URL + '/images/hydration.jpg'} alt="My Image" className="img-recomend4" />
                <p class="diet">Hydration</p>
                Drink an adequate amount of water throughout the day to stay hydrated. The daily
                recommended amount varies, but a general guideline is around 8 cups (2 liters) of water.
            </div>

            <div>
                <br />
                <img src={process.env.PUBLIC_URL + '/images/sleep.jpg'} alt="My Image" className="img-recomend3" />
                <p class="diet">Sufficient sleep</p>
                Get enough sleep for optimal health and well-being.
                Most adults require 7-9 hours of quality sleep per night.
            </div>

            <div>
                <br />
                <img src={process.env.PUBLIC_URL + '/images/stress.jpg'} alt="My Image" className="img-recomend2" />
                <p class="diet">Stress management</p>
                Find healthy ways to manage stress, such as practicing relaxation techniques, engaging
                in hobbies, spending time with loved ones, or seeking support from a therapist or counselor.
            </div>

            <div>
                <br />
                <img src={process.env.PUBLIC_URL + '/images/checkup.jpg'} alt="My Image" className="img-recomend1" />
                <p class="diet">Regular check-ups</p>
                Schedule routine check-ups with your healthcare provider to monitor your
                overall health, identify potential issues early on, and receive appropriate preventive care.
            </div>
        </section></>
    );
}

export default Recomendations;