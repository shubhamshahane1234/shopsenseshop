import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className=" hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://plus.unsplash.com/premium_vector-1727541790617-3a3798ea6652?q=80&w=2196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div // md:mx-0
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Forgot Password
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-[#2c9499] hover:bg-[#61a3a6] focus:bg-[#61a3a6] text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Continue
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              Already account?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
