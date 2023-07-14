/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div className="relative flex h-full w-full">
        <button
          className="absolute top-4 left-4 bg-white text-white rounded-full p-2 hover:bg-orange-900 transition duration-200"
          onClick={() => window.history.back()}
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
        <div className="h-screen w-1/2 bg-black">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p className="text-2xl">Login|</p>
              <p>please login to continue|</p>
            </div>
            <div className="my-6">
              <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  className="mr-2 w-6 object-fill"
                />
                Sign in with Google
              </button>
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-sm">
                  Or login via our secure system
                </legend>
              </fieldset>
            </div>
            <div className="mt-10">
              <form>
                <div>
                  <label className="mb-2.5 block font-extrabold" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="mail@user.com"
                  />
                </div>
                <div className="mt-4">
                  <label className="mb-2.5 block font-extrabold" for="email">
                    Password
                  </label>
                  <input
                    type="password"
                    id="email"
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>
                <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label for="remember" className="mx-2 text-sm">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <a href="#" className="text-sm hover:text-gray-200">
                      Forgot password
                    </a>
                  </div>
                </div>
                <div className="my-10">
                  <button className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">
                    Login
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-gray-400 font-semibold">
                    Don't have account?
                  </span> {' '}
                  <a href="/signup" className="font-semibold text-orange-700">
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="h-screen w-1/2 bg-blue-600">
          <img
            src="src/assets/loginbg.jpg"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};
