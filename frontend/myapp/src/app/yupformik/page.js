"use client"; // This directive is used to indicate that this component is a client-side component.
import React from "react";
import { Input } from "@nextui-org/input";
import { useFormik } from "formik";
import * as Yup from "yup";

// Define the validation schema using Yup
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!") // Minimum length validation for first name
    .max(50, "Too Long!") // Maximum length validation for first name
    .required("Required"), // Required field validation for first name
  lastName: Yup.string()
    .min(2, "Too Short!") // Minimum length validation for last name
    .max(50, "Too Long!") // Maximum length validation for last name
    .required("Required"), // Required field validation for last name
  email: Yup.string().email("Invalid email").required("Required"), // Email validation
  password: Yup.string()
    .min(8, "Password must be at least 8 characters") // Minimum length validation for password
    .matches(/[a-z]/, "Password must contain at least one lowercase letter") // Lowercase letter validation for password
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter") // Uppercase letter validation for password
    .matches(/[0-9]/, "Password must contain at least one number") // Number validation for password
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ) // Special character validation for password
    .required("Required"), // Required field validation for password
});

// Define the SignupForm component
const SignupForm = () => {
  // Initialize formik with initial values, validation schema, and submit handler
  const formik = useFormik({
    initialValues: {
      firstName: "", // Initial value for first name
      lastName: "", // Initial value for last name
      email: "", // Initial value for email
      password: "", // Initial value for password
    },
    validationSchema: SignupSchema, // Validation schema for the form
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); // Alert the form values on submit
      console.log("Submitted values:", values); // Log the form values on submit
    },
  });

  // Custom handleChange function to log actions and state changes
  const handleChange = (e) => {
    formik.handleChange(e); // Call formik's handleChange
    console.log("Action: Change", {
      name: e.target.name,
      value: e.target.value,
    }); // Log the change action
    console.log("Next State:", formik.values); // Log the next state of form values
    console.log(formik); // Log the formik object
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName">First Name</label>
          <Input
            isRequired
            id="firstName"
            type="text"
            name="firstName"
            label="firstName"
            className="max-w-xs"
            onChange={handleChange} // Handle change
            onBlur={formik.handleBlur} // Handle blur
            value={formik.values.firstName} // Set value from formik
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500">{formik.errors.firstName}</div>
          ) : null}{" "}
          {/* Display error if field is touched and there's an error */}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName">Last Name</label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            className="max-w-xs"
            label="last name"
            onChange={handleChange} // Handle change
            onBlur={formik.handleBlur} // Handle blur
            value={formik.values.lastName} // Set value from formik
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500">{formik.errors.lastName}</div>
          ) : null}{" "}
          {/* Display error if field is touched and there's an error */}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <Input
            isRequired
            id="email"
            type="email"
            name="email"
            label="Email"
            className="max-w-xs"
            onChange={handleChange} // Handle change
            onBlur={formik.handleBlur} // Handle blur
            value={formik.values.email} // Set value from formik
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}{" "}
          {/* Display error if field is touched and there's an error */}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <Input
            isRequired
            id="password"
            name="password"
            type="password"
            className="max-w-xs"
            onChange={handleChange} // Handle change
            onBlur={formik.handleBlur} // Handle blur
            value={formik.values.password} // Set value from formik
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}{" "}
          {/* Display error if field is touched and there's an error */}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
