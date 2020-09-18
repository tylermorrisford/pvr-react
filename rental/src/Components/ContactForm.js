import React from "react";
import { useFormik } from "formik";
// import API from "../utils/API";

const ContactForm = ({
    reload
}) => {
    const formik = useFormik({
      initialValues: 
      {   
      messageName: "",
      messageEmail: "",
      messagePhone: "", 
      messageBody: "", 
    },
      onSubmit: values => {
          console.log(values);
          // Save new cottage - then reload cottage data to the Admin page
        //   API.saveCottage(values).then(reload()).catch((err) => {console.log(err)})
      }
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="messageName">Name: </label>
        <input
          className="validate"
          id="messageName"
          name="messageName"
          type="messageName"
          onChange={formik.handleChange}
          value={formik.values.messageName}
        /><br />
        <label htmlFor="messageEmail">Email: </label>
        <input
          className="validate"
          id="messageEmail"
          name="messageEmail"
          type="messageEmail"
          onChange={formik.handleChange}
          value={formik.values.messageEmail}
        /><br />
        <label htmlFor="messagePhone">Phone: </label>
        <input
          className="validate"
          id="messagePhone"
          name="messagePhone"
          type="messagePhone"
          onChange={formik.handleChange}
          value={formik.values.messagePhone}
        /><br />
        <label htmlFor="messageBody">Message: </label>
        <input
          className="validate"
          id="messageBody"
          name="messageBody"
          type="messageBody"
          onChange={formik.handleChange}
          value={formik.values.messageBody}
        /><br />
        <button className="btn btn-waves blue" type="submit">Send</button>
      </form>
    );
  };

  export default ContactForm