/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../authentication/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBack = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const { authenLogin } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await authenLogin(email, passcode);
    navigate("/");
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <button
          className="absolute top-4 left-4 bg-white text-white rounded-full p-2 hover:bg-orange-500 transition duration-200"
          onClick={handleBack}
          title="Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
            <title>Back</title>
          </svg>
        </button>

        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="src/assets/loginbg.jpg"
            alt="login-background"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-black">
              Log in to your account
            </h1>

            <form className="mt-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-black">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-black">Passcode</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="passcode"
                    placeholder="Enter Passcode"
                    // minLength="8"
                    // maxLength="15"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        style={{ marginTop: "13px" }}
                        fill="currentColor"
                        class="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        style={{ marginTop: "13px" }}
                        fill="currentColor"
                        class="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="text-right mt-2">
                <Link to={"/forgotPassword"}>
                  <a className="text-sm font-semibold text-orange-500 hover:text-orange-700 focus:text-orange-700">
                    Forgot Password?
                  </a>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full block bg-orange-500 hover:bg-orange-400 focus:bg-orange-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                Log In
              </button>
              <ToastContainer />
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8 text-black ml-[70px]">
              Need an account?{" "}
              <Link to={"/signup"}>
                <a className="text-orange-500 hover:text-orange-700 font-semibold">
                  Create an account
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
