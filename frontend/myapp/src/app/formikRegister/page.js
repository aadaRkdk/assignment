/*
  RegisterPage Component

  Description:
  This component renders a registration form using various modern libraries and tools. 
  It demonstrates the use of React functional components, form handling with Formik, animations
  with Framer Motion, and styling with Tailwind CSS. The form captures user details such as
  full name, email, password, and repeat password and validates them before submission.

  Languages and Tools Used:
  - JavaScript (with JSX syntax for React components)
  - CSS (using Tailwind CSS for styling)
  - React (for building the UI)
  - Formik (for managing form state and validation)
  - Framer Motion (for adding animations)
  - Next.js (for client-side routing with the Link component)
  - NextUI (for pre-styled UI components like Button)

  Logic and Concepts:
  - React Functional Components: Used to define the RegisterPage component.
  - useFormik Hook: Manages the form state and handles form submission.
  - Framer Motion: Adds animations to form fields and buttons for better user experience.
  - Tailwind CSS: Provides utility-first CSS classes for styling the components.
  - Client-side Navigation: Implemented with Next.js Link component for seamless page transitions.

  Suggestions for Improvement:
  - Implement proper validation for email and password fields.
  - Enhance the user experience by adding more interactive elements or tooltips.
  - Store form submission data in a database or state management library for better persistence.
  - Improve accessibility by adding ARIA labels and roles.
  - Add error handling and feedback for users on form submission.
*/

"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

// RegisterPage component using useFormik for form state management and framer-motion for animations
const RegisterPage = () => {
  // useFormik hook to manage form state and handle form submission
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      // Handle form submission, alert and log form values
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-4 text-2xl"></div>
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Animation wrapper for form using framer-motion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
                Register
              </h1>
              <p className="text-center text-gray-600 mb-4">
                Please fill in this form to create an account.
              </p>
              <hr className="mb-4" />
            </div>

            {/* Full Name Input Field */}
            <div className="mb-1">
              <label
                htmlFor="fullName"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Full Name
              </label>
              {/* Animated input field using framer-motion */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  required
                  className="w-full px-4 py-2 mb-1 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </motion.div>
            </div>

            {/* Email Input Field */}
            <div className="mb-1">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email
              </label>
              {/* Animated input field using framer-motion */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                  className="w-full px-4 py-2 mb-1 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </motion.div>
            </div>

            {/* Password Input Field */}
            <div className="mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Password
              </label>
              {/* Animated input field using framer-motion */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                  className="w-full px-4 py-2 mb-1 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </motion.div>
            </div>

            {/* Repeat Password Input Field */}
            <div className="mb-1">
              <label
                htmlFor="repeatPassword"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Repeat Password
              </label>
              {/* Animated input field using framer-motion */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat Password"
                  onChange={formik.handleChange}
                  value={formik.values.repeatPassword}
                  required
                  className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </motion.div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600">
                By creating an account you agree to our{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms & Privacy
                </a>
                .
              </p>
            </div>

            {/* Animated submit button using framer-motion */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Register
              </Button>
            </motion.div>

            <div className="mt-4">
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <Link href="/formikLogin" legacyBehavior>
                  <a className="text-blue-500 hover:underline">Sign in</a>
                </Link>
                .
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default RegisterPage;
