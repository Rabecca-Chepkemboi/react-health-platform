import React from "react";
import './style.css';

function AppointmentForm() {
  return (
    <div>
      <h1>Appointment</h1>
      <hr></hr>

      <section className="forms">
        <div className="doctors-sheet">
          <h3>Select your Doctor</h3>
          <form className="form">
            <label htmlFor="doctor-name">Name:</label>
            <input type="text" id="doctor-name" name="doctor-name" placeholder="Enter your name" required />

            <label htmlFor="doctor-email">Email:</label>
            <input type="email" id="doctor-email" name="doctor-email" placeholder="Enter your email" required />

            <label htmlFor="doctor-speciality">Speciality:</label>
            <input type="text" id="doctor-speciality" name="doctor-speciality" placeholder="Enter your speciality" required />

            <p><button type="submit">Confirm selection</button></p>
          </form>
        </div>

        <div className="patients-sheet">
          <h3>Enter your details</h3>
          <form className="form">
            <label htmlFor="patient-name">Name:</label>
            <input type="text" id="patient-name" name="patient-name" placeholder="Enter your name" required />

            <label htmlFor="patient-email">Email:</label>
            <input type="email" id="patient-email" name="patient-email" placeholder="Enter your email" required />

            <label htmlFor="appointment-date">Date & Time:</label>
            <input type="datetime-local" id="appointment-date" name="appointment-date" required />

            <p><button type="submit">Submit appointment</button></p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AppointmentForm;