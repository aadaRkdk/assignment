"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { motion } from "framer-motion";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

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
                Login
              </h1>
              <p className="text-center text-gray-600 mb-4">
                Please fill in this form to log into your account.
              </p>
              <hr className="mb-6" />
            </div>

            <div className="mb-6">
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
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </motion.div>
            </div>

            <div className="mb-6">
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
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </motion.div>

            <div className="mt-6">
              <p className="text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" legacyBehavior>
                  <a className="text-blue-500 hover:underline">Register</a>
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

export default LoginPage;
