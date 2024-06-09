"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { Input, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
      registerUser(values);
    },
  });

  const registerUser = (values) => {
    fetch("http://localhost:3000/register", {
      method: "POST", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json", // Assuming JSON data is being sent
        // Add any other headers as needed
      },
      body: JSON.stringify(values), // Convert the values object to JSON string and send it as the request body
    });
    // .then(response => {
    //     // Handle the response here
    // })
    // .catch(error => {
    //     // Handle any errors that occur during the fetch operation
    // });
  };

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-4 text-2xl"></div>
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
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

            <div className="mb-1">
              <label
                htmlFor="fullName"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Full Name
              </label>
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

            <div className="mb-1">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email
              </label>
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

            <div className="mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Password
              </label>
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

            <div className="mb-1">
              <label
                htmlFor="repeatPassword"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Repeat Password
              </label>
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
