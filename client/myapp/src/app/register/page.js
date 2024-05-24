/*
  Register page using static React component.
*/

export default function RegisterPage() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-2">
        <form>
          <div>
            <h1 className="text-2xl font-bold">Register</h1>
            <p>Please fill in this form to create an account.</p>
            <label>
              <b>Full Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
            <label>
              <b>Password</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
            <label>
              <b>Repeat Password</b>
            </label>
            <input
              type="text"
              placeholder="Repeat Password"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
            <hr />
            <p>
              By creating an account you agree to our{"  "}
              <a href="#" className="text-blue-500">
                Terms and Privacy
              </a>
              .
            </p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">
              Register
            </button>
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">
                Sign in
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
