import Link from "next/link";

const RegisterPage = () => {
  return (
    <main>
      <div className="p-4 text-2xl"></div>

      <div className="flex min-h-screen flex-col items-center justify-between p-2">
        <form>
          <div className="container mx-auto max-w-md p-4">
            <h1 className="text-2xl font-bold mb-2">Register</h1>
            <p className="mb-4">
              Please fill in this form to create an account.
            </p>
            <hr className="mb-4" />

            <label htmlFor="name" className="block mb-1">
              <b>Full Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              name="fullname"
              id="fullname"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="email" className="block mb-1">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="psw" className="block mb-1">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="psw-repeat" className="block mb-1">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <hr className="mb-4" />

            <p className="mb-4">
              By creating an account you agree to our{" "}
              <a href="#" className="text-blue-500">
                Terms & Privacy
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              Register
            </button>
          </div>

          <div className="container mx-auto max-w-md p-4">
            <p className="mb-4">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
