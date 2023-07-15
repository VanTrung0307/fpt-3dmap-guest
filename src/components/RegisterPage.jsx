/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import VerifyEmail from "./VerifyEmail";
import ReactModal from "react-modal";

export const RegisterPage = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    cls1: {
      fill: "none",
    },
    cls2: {
      fill: "none",
    },
    cls3: {
      clipPath: "url(#clip-path)",
    },
    cls4: {
      clipPath: "url(#clip-path-2)",
    },
    cls5: {
      fill: "#fff",
    },
  };

  const handleExitToMainPage = () => {
    window.location.href = "/main";
  };

  const handleExitToLogin = () => {
    window.location.href = "/login";
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <button
        className="absolute top-4 left-4 bg-black text-white rounded-full p-2 hover:bg-orange-500 transition duration-200"
        onClick={handleExitToLogin}
        title="Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-black"
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

      <button
        className="absolute top-4 right-4 bg-black text-white rounded-full p-2 hover:bg-blue-500 transition duration-200"
        onClick={handleExitToMainPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house h-6 w-6"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          <title>Main</title>
        </svg>
      </button>

      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-full bg-white flex items-center justify-center">
          <div className="w-full px-12">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              Sign Up
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-orange-600 hover:text-orange-700 hover:underline"
                title="Sign In"
              >
                Sign in here
              </a>
            </p>

            <form className="my-8 text-sm" onSubmit={handleSignUp}>
              <div className="flex flex-col my-4">
                <label htmlFor="username" className="text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="email" className="text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="gender" className="text-gray-700">
                  Gender
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      className="p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                      required
                    />
                    <label htmlFor="male" className="ml-2 text-gray-900">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      className="p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                      required
                    />
                    <label htmlFor="female" className="ml-2 text-gray-900">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="phone" className="text-gray-700">
                  Phone Number
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                  placeholder="Enter your phone"
                  required
                />
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="password" className="text-gray-700">
                  Password
                </label>
                <div className="relative flex items-center mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="absolute right-2 bg-transparent flex items-center justify-center text-white-700"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col my-4">
                <label
                  htmlFor="password_confirmation"
                  className="text-gray-700"
                >
                  Password Confirmation
                </label>
                <div className="relative flex items-center mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password_confirmation"
                    id="password_confirmation"
                    className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                    placeholder="Enter your password again"
                    required
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="absolute right-2 bg-transparent flex items-center justify-center text-white-700"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Other form fields */}

              <div className="my-4 flex items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="mr-2 focus:ring-0 rounded"
                  required
                />
                <label htmlFor="remember_me" className="text-gray-700">
                  I accept the{" "}
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    privacy policy
                  </a>
                </label>
              </div>

              <div className="my-4 flex items-center justify-end space-x-4">
                <button
                  className="bg-orange-600 hover:bg-orange-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* Social login buttons */}

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            {/* Additional content */}
            <div>
              <div className="text-sm">
                <a
                  onClick={handleOpenModal}
                  className="cursor-pointer flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 326667 333333"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                      fill="#34a853"
                    ></path>
                    <path
                      d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                      fill="#fbbc04"
                    ></path>
                    <path
                      d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                      fill="#ea4335"
                    ></path>
                  </svg>
                  <span>Sign up with Google</span>
                </a>
              </div>
              {showModal && (
                <ReactModal
                  isOpen={true}
                  onRequestClose={handleCloseModal}
                  contentLabel="Modal"
                  className="modal"
                  overlayClassName="modal-overlay"
                  shouldCloseOnOverlayClick={true}
                  ariaHideApp={false} // Prevents app root element warning
                >
                  <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="relative bg-blue-100 p-4 rounded-lg shadow-xl">
                      <VerifyEmail />
                      <button
                        onClick={handleCloseModal}
                        className="absolute top-0 right-0 -mt-3 -mr-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition duration-300 ease-in-out"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </ReactModal>
              )}
            </div>
          </div>
        </div>

        <div
          className="hidden lg:flex lg:w-1/2 xl:w-2/3 2xl:w-3/4 h-full bg-cover"
          style={{
            backgroundImage: "url('src/assets/signupbg.jpg')",
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30">
            <div className="flex items-center justify-center space-x-2">
              <img
                src="src/assets/Logo.png"
                alt="Description of the image"
                width={24}
                height={24}
                className="h-16 w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 text-gray-100"
              />
              <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-100 tracking-wider">
                FPT_HCM 3DMAP
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
