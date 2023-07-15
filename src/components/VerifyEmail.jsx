/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const VerifyEmail = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/, ""); // Remove non-numeric characters

    // Limit the input to a single digit
    const singleDigitValue = numericValue.slice(0, 1);

    setValue(singleDigitValue);
  };

  return (
    <div className="">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-black">
              <p>We have sent a code to your email ba**@dipainhouse.com</p>
            </div>
          </div>

          <div>
            <form action="" method="post">
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-400 text-orange-400"
                      type="text"
                      name=""
                      id=""
                      value={value}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-orange-500 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-black">
                    <p>Didn't receive the code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-orange-600"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
