import React from "react";
// import { Formik } from 'formik';
import { useFormik } from "formik";

const AddForm = () => {
    const formik = useFormik({
      initialValues: 
      {   
      cottageId: "",
      cottageName: "",
      cottageLocation: "",
      cottageImage: "", // would need to add logic to upload image, for now, paste in known img src
      cottagePerNight: "",
      cottagePerWeek: "",
      cottageSleeps: "",
      cottageSlug: "",
      cottageDescription: "",
      cottageBedrooms: "",
      cottageBathrooms: "", 
    },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="cottageName">Cottage Name: </label>
        <input
          className="validate"
          id="cottageName"
          name="cottageName"
          type="cottageName"
          onChange={formik.handleChange}
          value={formik.values.cottageName}
        /><br />
        <label htmlFor="cottageLocation">Cottage Location: </label>
        <input
          className="validate"
          id="cottageLocation"
          name="cottageLocation"
          type="cottageLocation"
          onChange={formik.handleChange}
          value={formik.values.cottageLocation}
        /><br />
        <label htmlFor="cottageImage">Cottage Image (src): </label>
        <input
          className="validate"
          id="cottageImage"
          name="cottageImage"
          type="cottageImage"
          onChange={formik.handleChange}
          value={formik.values.cottageImage}
        /><br />
        <label htmlFor="cottagePerNight">Cottage Per Night Price: </label>
        <input
          className="validate"
          id="cottagePerNight"
          name="cottagePerNight"
          type="cottagePerNight"
          onChange={formik.handleChange}
          value={formik.values.cottagePerNight}
        /><br />
        <label htmlFor="cottagePerWeek">Cottage Weekly Price: </label>
        <input
          className="validate"
          id="cottagePerWeek"
          name="cottagePerWeek"
          type="cottagePerWeek"
          onChange={formik.handleChange}
          value={formik.values.cottagePerWeek}
        /><br />
        <label htmlFor="cottageSleeps">This Cottage Sleeps (enter a number): </label>
        <input
          className="validate"
          id="cottageSleeps"
          name="cottageSleeps"
          type="cottageSleeps"
          onChange={formik.handleChange}
          value={formik.values.cottageSleeps}
        /><br />
        <label htmlFor="cottageSlug">Cottage Tagline: </label>
        <input
          className="validate"
          id="cottageSlug"
          name="cottageSlug"
          type="cottageSlug"
          onChange={formik.handleChange}
          value={formik.values.cottageSlug}
        /><br />
        <label htmlFor="cottageDescription">Longer Cottage Description: </label>
        <input
          className="validate"
          id="cottageDescription"
          name="cottageDescription"
          type="cottageDescription"
          onChange={formik.handleChange}
          value={formik.values.cottageDescription}
        /><br />
        <label htmlFor="cottageBedrooms">Number of Bedrooms: </label>
        <input
          className="validate"
          id="cottageBedrooms"
          name="cottageBedrooms"
          type="cottageBedrooms"
          onChange={formik.handleChange}
          value={formik.values.cottageBedrooms}
        /><br />
        <label htmlFor="cottageBathrooms">Number of Bathrooms: </label>
        <input
          className="validate"
          id="cottageBathrooms"
          name="cottageBathrooms"
          type="cottageBathrooms"
          onChange={formik.handleChange}
          value={formik.values.cottageBathrooms}
        /><br />
        <hr />
        <button className="btn" type="submit">Add Cottage</button>
      </form>
    );
  };

  export default AddForm