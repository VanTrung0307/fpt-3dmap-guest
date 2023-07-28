/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getSchools } from "../api/Schools";
import { register } from "./../api/Account";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
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

  const navigate = useNavigate();

  const handleExitToMainPage = () => {
    navigate("/")
  };

  const handleExitToLogin = () => {
    navigate("/login")
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const gender = formData.get("gender").toString();
    const phoneNumber = formData.get("phoneNumber");
    const password = formData.get("password");
    const fullname = formData.get("fullname");
    const schoolId = formData.get("schoolId");

    register(username, email, gender, phoneNumber, password, fullname, schoolId)
      .then((response) => {
        console.log("Sign up success:", response);
      })
      .catch((error) => {
        console.error("Sign up error:", error);
      });
  };

  const [schoolOptions, setSchoolOptions] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");

  useEffect(() => {
    const fetchSchoolOptions = async () => {
      try {
        const schools = await getSchools();
        setSchoolOptions(schools);
      } catch (error) {
        console.error("Error fetching school options:", error);
        setSchoolOptions([]);
      }
    };

    fetchSchoolOptions();
  }, []);

  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
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
            {/* <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800 mt-[50px]">
              Sign Up
            </h2> */}

            <form className="my-8 text-sm mt-[60px]" onSubmit={handleSignUp}>
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
                <label htmlFor="fullname" className="text-gray-700">
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                  placeholder="Enter your fullname"
                  required
                />
              </div>

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
                <label htmlFor="phoneNumber" className="text-gray-700">
                  Phone Number
                </label>
                <input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="schoolId" className="text-gray-700">
                  School
                </label>
                <select
                  name="schoolId"
                  id="schoolId"
                  value={selectedSchool}
                  onChange={handleSchoolChange}
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-white-900"
                  required
                >
                  <option value="" disabled>
                    Select your school
                  </option>
                  {schoolOptions.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Other form fields */}

              <div className="my-4 flex items-center justify-end space-x-4">
                <button
                  className="bg-orange-600 hover:bg-orange-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
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
              <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-100 tracking-wider inline-block">
                SIGN UP
              </h1>
            </div>
            <div>
              <p className="text-center text-sm text-white-600 mt-2 font-bold flex-col inline-block text-[25px]">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-orange-500 hover:text-orange-700 hover:underline"
                  title="Sign In"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
