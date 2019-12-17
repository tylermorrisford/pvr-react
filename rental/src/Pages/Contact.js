import React from "react";
import ContactForm from "../Components/ContactForm"

const Contact = () => {
    return  <div>
            <div className="northport">
              <div className="valign-wrapper callout">
                <h2>Contact us</h2>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <h4>Have a question?<br/>Need more info?</h4>
                        <p>Send us a message!</p>
                    </div>
                    <div className="col s12 m6">
                        <ContactForm />
                    </div>
                </div>
            </div>
            </div>
  }

  export default Contact