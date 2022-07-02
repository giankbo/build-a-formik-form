import React from "react";
// Import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // Add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',   
      pswField: ''
    },
    onSubmit: values => {
      alert(JSON.stringify('Login Successful', null, 2));
    },
    validate: values => {
      const errors = {};
      if (!values.emailField) {
        errors.emailError = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailError = 'Username should be an email';
      }

      if (!values.pswField) {
        errors.pswError = 'Field required';
      }

      return errors;
    }
  }); 

  return (
    // Build you form here.
    <form onSubmit={formik.handleSubmit}>
      <h2>Login form</h2>
      <label htmlFor="emailField">Email</label>
      <input 
        id="emailField" 
        name="emailField"
        type="emailField" 
        onChange={formik.handleChange} 
        value={formik.values.emailField} 
      />
      {formik.errors.emailError ? <div>{formik.errors.emailError}</div> : null}

      <label htmlFor="pswField">Password</label>
      <input 
        id="pswField" 
        name="pswField" 
        type="pswField"
        onChange={formik.handleChange} 
        value={formik.values.pswField} 
      />
      {formik.errors.pswError ? <div>{formik.errors.pswError}</div> : null}

      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default App;
