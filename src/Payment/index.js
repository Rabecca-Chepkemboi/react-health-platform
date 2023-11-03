import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';



const Payment = () => {
    return (
      <>
        <h1>Payment section</h1>
        <hr></hr>

        <section className="payment">
          <div>
            <FontAwesomeIcon icon={faCircle} className="icon" />
            <span>Bank to bank transfer</span>
            <br />
            <br />
            <FontAwesomeIcon icon={faCircle} className="icon" />
            <span>Your wallet</span>
            <br />
            <br />
            <FontAwesomeIcon icon={faCircle} className="icon" />
            <span>Cash payment</span>
          </div>
  
          <div>
            <FontAwesomeIcon icon={faCircle} className="icon" />
            <span>Credit card</span>
            <br />
            <br />
            <FontAwesomeIcon icon={faPlus} className="icon" />
            <span>Add another method</span>
          </div>
        </section>
      </>
    );
  }
  
  export default Payment;
  